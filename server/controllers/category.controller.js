import CategoryModel from "../models/category.model.js";
import { v2 as cloudinary } from "cloudinary";
import { error } from "console";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

// Upload ảnh
var imagesArr = [];
export async function uploadImages(request, response) {
  try {
    imagesArr = [];

    const image = request.files;

    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: false,
    };

    for (let i = 0; i < image?.length; i++) {
      const img = await cloudinary.uploader.upload(
        image[i].path,
        options,
        function (error, result) {
          console.log(result);
          imagesArr.push(result.secure_url);
          fs.unlinkSync(`uploads/${request.files[i].filename}`);
          console.log(request.files[i].filename);
        }
      );
    }

    return response.status(200).json({
      images: imagesArr,
    });
  } catch (error) {
    return response.status(500).json({
      success: false,
      error: true,
      message: error.message || error,
    });
  }
}

// Tạo category
export async function createCategory(request, response) {
  try {
    let category = new CategoryModel({
      name: request.body.name,
      images: imagesArr,
      parentId: request.body.parentId,
      parentCatName: request.body.parentCatName,
    });

    if (!category) {
      return response.status(500).json({
        message: "Không tạo được danh mục",
        error: true,
        success: false,
      });
    }

    category = await category.save();
    imagesArr = [];

    return response.status(200).json({
      message: "Tạo danh mục thành công",
      error: false,
      success: true,
      category: category,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}
// Lấy tất cả danh mục
export async function getAllCategories(request, response) {
  try {
    const categories = await CategoryModel.find();
    const categoriesMap = {};

    categories.forEach((cat) => {
      categoriesMap[cat._id] = { ...cat._doc, children: [] };
    });

    const rootCategories = [];

    categories.forEach((cat) => {
      if (cat.parentId) {
        categoriesMap[cat.parentId].children.push(categoriesMap[cat._id]);
      } else {
        rootCategories.push(categoriesMap[cat._id]);
      }
    });

    return response.status(200).json({
      success: true,
      error: false,
      data: rootCategories,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}

// Lấy số lượng danh mục
export async function getCategoriesCount(request, response) {
  try {
    const categoryCount = await CategoryModel.countDocuments({
      parentId: undefined,
    });

    if (!categoryCount) {
      return response.status(500).json({
        error: true,
        success: false,
      });
    } else {
      return response.send({ categoryCount: categoryCount });
    }
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}

// Lấy số lượng danh mục con
export async function getSubCategoriesCount(request, response) {
  try {
    const categories = await CategoryModel.find();

    if (!categories) {
      return response.status(500).json({
        error: true,
        success: false,
      });
    } else {
      const subCatList = [];
      for (let cat of categories) {
        if (cat.parentId !== undefined) {
          subCatList.push(cat);
        }
      }

      return response.send({ subCatCount: subCatList.length });
    }
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}

// Lấy danh mục theo ID
export async function getCategoriesById(request, response) {
  try {
    const category = await CategoryModel.findById(request.params.id);

    if (!category) {
      return response.status(500).json({
        message: "Không tìm thấy danh mục với ID đó",
        error: true,
        success: false,
      });
    }

    return response.status(200).json({
      success: true,
      error: false,
      category: category,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}

// Xóa ảnh
export async function removeImageFromCloudinary(request, response) {
  const imgUrl = request.body.img;

  const urlArr = imgUrl.split("/");
  const image = urlArr[urlArr.length - 1];

  const imageName = image.split(".")[0];

  if (imageName) {
    const res = await cloudinary.uploader.destroy(
      imageName,
      (error, result) => {}
    );
    if (res) {
      response.status(200).json({
        success: true,
        error: false,
        message: "Xóa ảnh thành công",
      });
    }
  }
}

// Xóa danh mục
export async function deleteCategory(request, response) {
  const category = await CategoryModel.findById(request.params.id);
  const images = category.images;

  for (img of images) {
    const imgUrl = img;
    const urlArr = imgUrl.split("/");
    const image = urlArr[urlArr.length - 1];

    const imageName = image.split(".")[0];

    if (imageName) {
      cloudinary.uploader.destroy(imageName, (error, result) => {});
    }
  }

  const subCategory = await CategoryModel.find({
    parentId: request.params.id,
  });

  for (let i = 0; i < subCategory.length; i++) {
    const thirdSubCategory = await CategoryModel.find({
      parentId: subCategory[i]._id,
    });

    for (let i = 0; i < thirdSubCategory.length; i++) {
      const deletedThirdSubCat = await CategoryModel.findByIdAndDelete(
        thirdSubCategory[i]._id
      );
    }
    const deletedSubCat = await CategoryModel.findByIdAndDelete(
      subCategory[i]._id
    );
  }

  const deletedCat = await CategoryModel.findByIdAndDelete(request.params.id);

  if (!deletedCat) {
    return response.status(404).json({
      message: "Không tìm thấy danh mục",
      error: true,
      success: false,
    });
  }

  return response.status(200).json({
    message: "Xóa danh mục thành công",
    error: false,
    success: true,
  });
}

// Cập nhật danh mục
export async function updateCategory(request, response) {
  const category = await CategoryModel.findByIdAndUpdate(
    request.params.id,
    {
      name: request.body.name,
      images: imagesArr.length > 0 ? imagesArr[0] : request.body.images,
      parentId: request.body.parentId,
      parentCatName: request.body.parentCatName,
    },
    { new: true }
  );

  if (!category) {
    return response.status(500).json({
      message: "Không thể cập nhật danh mục",
      error: true,
      success: false,
    });
  }
  imagesArr = [];
  return response.status(200).json({
    error: false,
    success: true,
    message: "Cập nhật danh mục thành công",
    category: category,
  });
}
