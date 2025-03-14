import MyListModel from "../models/myList.model.js";

// Thêm SP vào danh sách yêu thích
export const addProductToMyList = async (request, response) => {
  try {
    // const userId = request.userId;
    const {
      userId,
      productId,
      productName,
      image,
      rating,
      price,
      oldPrice,
      brand,
      discount,
    } = request.body;

    const item = await MyListModel.findOne({
      userId: userId,
      productId: productId,
    });

    if (item) {
      return response.status(400).json({
        message: "Sản phẩm đã có trong danh sách yêu thích",
        data: item,
      });
    }

    const myList = new MyListModel({
      userId,
      productId,
      productName,
      image,
      rating,
      price,
      oldPrice,
      brand,
      discount,
    });

    const save = await myList.save();

    return response.status(200).json({
      error: false,
      success: true,
      message: "Sản phẩm đã được thêm vào danh sách yêu thích",
      data: save,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
};

// Xóa SP khỏi danh sách yêu thích
export const removeProductFromMyList = async (request, response) => {
  try {
    const myListItem = await MyListModel.findById(request.params.id);

    if (!myListItem) {
      return response.status(404).json({
        message: "Sản phẩm không tồn tại",
        success: false,
        error: true,
      });
    }

    const deletedItem = await MyListModel.findByIdAndDelete(request.params.id);

    if (!deletedItem) {
      return response.status(404).json({
        message: "Sản phẩm không tồn tại",
        success: false,
        error: true,
      });
    }

    return response.status(200).json({
      error: false,
      success: true,
      message: "Sản phẩm đã được xóa khỏi danh sách yêu thích",
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
};

// Lấy SP yêu thích
export const getProductsFromMyList = async (request, response) => {
  try {
    // const userId = request.userId;
    // const myListItem = await MyListModel.find({ userId: userId });

    const myListItem = await MyListModel.find({});

    return response.status(200).json({
      error: false,
      success: true,
      data: myListItem,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
};
