import ProductModel from "../models/product.model.js";
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

// Tạo sản phẩm
export async function createProduct(request, response) {
  try {
    let product = new ProductModel({
      name: request.body.name,
      description: request.body.description,
      price: request.body.price,
      images: imagesArr,
      brand: request.body.brand,
      price: request.body.price,
      oldPrice: request.body.oldPrice,
      catId: request.body.catId,
      catName: request.body.catName,
      subCatId: request.body.subCatId,
      subCatName: request.body.subCatName,
      thirdSubCatId: request.body.thirdSubCatId,
      thirdSubCat: request.body.thirdSubCat,
      countInStock: request.body.countInStock,
      rating: request.body.rating,
      isFeatured: request.body.isFeatured,
      discount: request.body.discount,
      size: request.body.size,
    });

    product = await product.save();

    if (!product) {
      return response.status(500).json({
        success: false,
        error: true,
        message: "Tạo sản phẩm thất bại",
      });
    }

    imagesArr = [];

    return response.status(200).json({
      success: true,
      error: false,
      message: "Tạo sản phẩm thành công",
      product: product,
    });
  } catch (error) {
    return response.status(500).json({
      success: false,
      error: true,
      message: error.message || error,
    });
  }
}

// Lấy tất cả SP
export async function getAllProducts(request, response) {
  try {
    const page = parseInt(request.query.page) || 1;
    const perPage = parseInt(request.query.page);
    const totalPosts = await ProductModel.countDocuments();
    const totalPages = Math.ceil(totalPosts / perPage);

    if (page > totalPages) {
      return response.status(404).json({
        success: false,
        error: true,
        message: "Không tìm thấy trang",
      });
    }

    const products = await ProductModel.find()
      .populate("category")
      .skip((page - 1) * perPage)
      .limit(perPage)
      .exec();

    if (!products) {
      return response.status(500).json({
        success: false,
        error: true,
        message: "Không có sản phẩm nào",
      });
    }

    return response.status(200).json({
      success: true,
      error: false,
      products: products,
      totalPages: totalPages,
      currentPage: page,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}

// Lấy tất cả SP bằng id của category
export async function getAllProductsByCatId(request, response) {
  try {
    const page = parseInt(request.query.page) || 1;
    const perPage = parseInt(request.query.page);

    const totalPosts = await ProductModel.countDocuments();
    const totalPages = Math.ceil(totalPosts / perPage);

    if (page > totalPages) {
      return response.status(404).json({
        success: false,
        error: true,
        message: "Không tìm thấy trang",
      });
    }

    const products = await ProductModel.find({ catId: request.params.id })
      .populate("category")
      .skip((page - 1) * perPage)
      .limit(perPage)
      .exec();

    if (!products) {
      return response.status(500).json({
        success: false,
        error: true,
        message: "Không có sản phẩm nào",
      });
    }

    return response.status(200).json({
      success: true,
      error: false,
      products: products,
      totalPages: totalPages,
      currentPage: page,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}

// Lấy tất cả SP bằng tên của category
export async function getAllProductsByCatName(request, response) {
  try {
    const page = parseInt(request.query.page) || 1;
    const perPage = parseInt(request.query.page);

    const totalPosts = await ProductModel.countDocuments();
    const totalPages = Math.ceil(totalPosts / perPage);

    if (page > totalPages) {
      return response.status(404).json({
        success: false,
        error: true,
        message: "Không tìm thấy trang",
      });
    }

    const products = await ProductModel.find({ catName: request.query.catName })
      .populate("category")
      .skip((page - 1) * perPage)
      .limit(perPage)
      .exec();

    if (!products) {
      return response.status(500).json({
        success: false,
        error: true,
        message: "Không có sản phẩm nào",
      });
    }

    return response.status(200).json({
      success: true,
      error: false,
      products: products,
      totalPages: totalPages,
      currentPage: page,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}

// Lấy tất cả SP bằng id của sub category
export async function getAllProductsBySubCatId(request, response) {
  try {
    const page = parseInt(request.query.page) || 1;
    const perPage = parseInt(request.query.page);

    const totalPosts = await ProductModel.countDocuments();
    const totalPages = Math.ceil(totalPosts / perPage);

    if (page > totalPages) {
      return response.status(404).json({
        success: false,
        error: true,
        message: "Không tìm thấy trang",
      });
    }

    const products = await ProductModel.find({
      subCatName: request.params.subCatName,
    })
      .populate("category")
      .skip((page - 1) * perPage)
      .limit(perPage)
      .exec();

    if (!products) {
      return response.status(500).json({
        success: false,
        error: true,
        message: "Không có sản phẩm nào",
      });
    }

    return response.status(200).json({
      success: true,
      error: false,
      products: products,
      totalPages: totalPages,
      currentPage: page,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}

// Lấy tất cả SP bằng tên của sub category
export async function getAllProductsBySubCatName(request, response) {
  try {
    const page = parseInt(request.query.page) || 1;
    const perPage = parseInt(request.query.page);

    const totalPosts = await ProductModel.countDocuments();
    const totalPages = Math.ceil(totalPosts / perPage);

    if (page > totalPages) {
      return response.status(404).json({
        success: false,
        error: true,
        message: "Không tìm thấy trang",
      });
    }

    const products = await ProductModel.find({ subCatId: request.params.id })
      .populate("category")
      .skip((page - 1) * perPage)
      .limit(perPage)
      .exec();

    if (!products) {
      return response.status(500).json({
        success: false,
        error: true,
        message: "Không có sản phẩm nào",
      });
    }

    return response.status(200).json({
      success: true,
      error: false,
      products: products,
      totalPages: totalPages,
      currentPage: page,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}

// Lấy tất cả SP bằng id của third sub category
export async function getAllProductsByThirdSubCatId(request, response) {
  try {
    const page = parseInt(request.query.page) || 1;
    const perPage = parseInt(request.query.page);

    const totalPosts = await ProductModel.countDocuments();
    const totalPages = Math.ceil(totalPosts / perPage);

    if (page > totalPages) {
      return response.status(404).json({
        success: false,
        error: true,
        message: "Không tìm thấy trang",
      });
    }

    const products = await ProductModel.find({
      thirdSubCatId: request.params.id,
    })
      .populate("category")
      .skip((page - 1) * perPage)
      .limit(perPage)
      .exec();

    if (!products) {
      return response.status(500).json({
        success: false,
        error: true,
        message: "Không có sản phẩm nào",
      });
    }

    return response.status(200).json({
      success: true,
      error: false,
      products: products,
      totalPages: totalPages,
      currentPage: page,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}

// Lấy tất cả SP bằng tên của third sub category
export async function getAllProductsByThirdSubCatName(request, response) {
  try {
    const page = parseInt(request.query.page) || 1;
    const perPage = parseInt(request.query.page);

    const totalPosts = await ProductModel.countDocuments();
    const totalPages = Math.ceil(totalPosts / perPage);

    if (page > totalPages) {
      return response.status(404).json({
        success: false,
        error: true,
        message: "Không tìm thấy trang",
      });
    }

    const products = await ProductModel.find({
      thirdSubCat: request.params.thirdSubCat,
    })
      .populate("category")
      .skip((page - 1) * perPage)
      .limit(perPage)
      .exec();

    if (!products) {
      return response.status(500).json({
        success: false,
        error: true,
        message: "Không có sản phẩm nào",
      });
    }

    return response.status(200).json({
      success: true,
      error: false,
      products: products,
      totalPages: totalPages,
      currentPage: page,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}

// Lấy tất cả SP bởi giá tiền
export async function getAllProductsByPrice(request, response) {
  let productList = [];

  if (request.query.catId !== "" && request.query.catId !== undefined) {
    const productListArr = await ProductModel.find({
      catId: request.query.catId,
    }).populate("category");

    productList = productListArr;
  }

  if (request.query.subCatId !== "" && request.query.subCatId !== undefined) {
    const productListArr = await ProductModel.find({
      subCatId: request.query.subCatId,
    }).populate("category");

    productList = productListArr;
  }

  if (
    request.query.thirdSubCatId !== "" &&
    request.query.thirdSubCatId !== undefined
  ) {
    const productListArr = await ProductModel.find({
      thirdSubCatId: request.query.thirdSubCatId,
    }).populate("category");

    productList = productListArr;
  }

  const filteredProducts = productList.filter((product) => {
    if (
      request.query.minPrice &&
      product.price < parseInt(+request.query.minPrice)
    ) {
      return false;
    }

    if (
      request.query.maxPrice &&
      product.price > parseInt(+request.query.maxPrice)
    ) {
      return false;
    }

    return true;
  });

  return response.status(200).json({
    error: false,
    success: true,
    products: filteredProducts,
    totalPages: 0,
    currentPage: 0,
  });
}

// Lấy tất cả SP bằng đánh giá
export async function getAllProductsByRating(request, response) {
  try {
    const page = parseInt(request.query.page) || 1;
    const perPage = parseInt(request.query.page);

    const totalPosts = await ProductModel.countDocuments();
    const totalPages = Math.ceil(totalPosts / perPage);

    if (page > totalPages) {
      return response.status(404).json({
        success: false,
        error: true,
        message: "Không tìm thấy trang",
      });
    }

    let products = [];

    if (request.query.catId !== undefined) {
      products = await ProductModel.find({
        rating: request.query.rating,
        catId: request.query.catId,
      })
        .populate("category")
        .skip((page - 1) * perPage)
        .limit(perPage)
        .exec();
    }

    if (request.query.subCatId !== undefined) {
      products = await ProductModel.find({
        rating: request.query.rating,
        subCatId: request.query.subCatId,
      })
        .populate("category")
        .skip((page - 1) * perPage)
        .limit(perPage)
        .exec();
    }

    if (request.query.thirdSubCatId !== undefined) {
      products = await ProductModel.find({
        rating: request.query.rating,
        thirdSubCatId: request.query.thirdSubCatId,
      })
        .populate("category")
        .skip((page - 1) * perPage)
        .limit(perPage)
        .exec();
    }

    if (!products) {
      return response.status(500).json({
        success: false,
        error: true,
        message: "Không có sản phẩm nào",
      });
    }

    return response.status(200).json({
      success: true,
      error: false,
      products: products,
      totalPages: totalPages,
      currentPage: page,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}

// Lấy số lượng tất cả SP
export async function getAllProductsCount(request, response) {
  try {
    const productsCount = await ProductModel.countDocuments();

    if (!productsCount) {
      return response.status(500).json({
        success: false,
        error: true,
      });
    }

    return response.status(200).json({
      success: true,
      error: false,
      productsCount: productsCount,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}

// Lấy tất cả SP nổi bật
export async function getAllFeaturedProducts(request, response) {
  try {
    const products = await ProductModel.find({
      isFeatured: true,
    }).populate("category");

    if (!products) {
      return response.status(500).json({
        success: false,
        error: true,
        message: "Không có sản phẩm nào",
      });
    }

    return response.status(200).json({
      success: true,
      error: false,
      products: products,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}

// Xóa SP
export async function deleteProduct(request, response) {
  const product = await ProductModel.findById(request.params.id).populate(
    "category"
  );

  if (!product) {
    return response.status(404).json({
      success: false,
      error: true,
      message: "Sản phẩm không tồn tại",
    });
  }

  const images = product.image;

  for (img of images) {
    const imgUrl = img;
    const urlArr = imgUrl.split("/");
    const image = urlArr[urlArr.length - 1];

    const imageName = image.split(".")[0];

    if (imageName) {
      cloudinary.uploader.destroy(imageName, (error, result) => {});
    }
  }

  const deletedProduct = await ProductModel.findByIdAndDelete(
    request.params.id
  );

  if (!deletedProduct) {
    return response.status(404).json({
      success: false,
      error: true,
      message: "Sản phẩm không tồn tại",
    });
  }

  return response.status(200).json({
    success: true,
    error: false,
    message: "Xóa sản phẩm thành công",
  });
}

// Lấy một SP
export async function getProduct(request, response) {
  try {
    const product = await ProductModel.findById(request.params.id).populate(
      "category"
    );

    if (!product) {
      return response.status(404).json({
        success: false,
        error: true,
        message: "Sản phẩm không tồn tại",
      });
    }

    return response.status(200).json({
      success: true,
      error: false,
      product: product,
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

// Cập nhật SP
export async function updateProduct(request, response) {
  try {
    const product = await ProductModel.findByIdAndUpdate(
      request.params.id,
      {
        name: request.body.name,
        description: request.body.description,
        price: request.body.price,
        images: request.body.images,
        brand: request.body.brand,
        price: request.body.price,
        oldPrice: request.body.oldPrice,
        catId: request.body.catId,
        catName: request.body.catName,
        subCatId: request.body.subCatId,
        subCatName: request.body.subCatName,
        thirdSubCatId: request.body.thirdSubCatId,
        thirdSubCat: request.body.thirdSubCat,
        countInStock: request.body.countInStock,
        rating: request.body.rating,
        isFeatured: request.body.isFeatured,
        //   discount: request.body.discount,
        size: request.body.size,
      },
      { new: true }
    );

    if (!product) {
      return response.status(404).json({
        success: false,
        error: true,
        message: "Sản phẩm không thể cập nhật",
      });
    }

    imagesArr = [];

    return response.status(200).json({
      success: true,
      error: false,
      message: "Cập nhật sản phẩm thành công",
      product: product,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}
