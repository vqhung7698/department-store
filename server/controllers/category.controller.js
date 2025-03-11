import CategoryModel from "../models/category.model.js";
import { v2 as cloudinary } from "cloudinary";
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

    return response.status(500).json({
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

// Lấy thông tin danh mục
export async function getCategories(request, response) {
  try {
    const categories = await CategoryModel.find();
    const categoriesMap = {};

    categories.forEach((cat) => {
      categoriesMap[cat._id] = { ...cat._doc, children: [] };
    });

    const rootCategories=[];

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
