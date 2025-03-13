import CartProductModel from "../models/cartproduct.model.js";
import UserModel from "../models/user.model.js";

// Thêm SP vào giỏ hàng
export const addCartItem = async (request, response) => {
  try {
    // const userId = request.userId;
    // const { productId } = request.body;
    // const userId = request.body.userId;
    const { userId, productId } = request.body;

    if (!productId || !userId) {
      return response.status(402).json({
        error: true,
        success: false,
        message: "Vui lòng cung cấp id sản phẩm và id người dùng",
      });
    }

    const checkItemCart = await CartProductModel.findOne({
      userId: userId,
      productId: productId,
    });

    if (checkItemCart) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "Sản phẩm đã có trong giỏ hàng",
      });
    }

    const cartItem = new CartProductModel({
      userId: userId,
      productId: productId,
      quantity: 1,
    });

    const save = await cartItem.save();

    const updateCartUser = await UserModel.updateOne(
      {
        _id: userId,
      },
      {
        $push: {
          shopping_cart: productId,
        },
      }
    );

    return response.status(200).json({
      error: false,
      success: true,
      message: "Thêm sản phẩm vào giỏ hàng thành công",
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

// Lấy SP trong giỏ hàng
export const getCartItem = async (request, response) => {
  try {
    // const userId = request.userId;
    const cartItem = await CartProductModel.find({}).populate("productId");

    // if (!cartItem) {
    //   return response.status(404).json({
    //     error: true,
    //     success: false,
    //     message: "Không tìm thấy sản phẩm trong giỏ hàng",
    //   });
    // }

    if (cartItem.length === 0) {
      return response.status(404).json({
        error: true,
        success: false,
        message: "Không tìm thấy sản phẩm trong giỏ hàng",
      });
    }

    return response.status(200).json({
      data: cartItem,
      error: false,
      success: true,
      message: "Lấy sản phẩm trong giỏ hàng thành công",
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
};

// Cập nhật SP trong giỏ hàng
export const updateCartItem = async (request, response) => {
  try {
    const userId = request.userId;
    const { _id, quantity } = request.body;

    if (!_id || !quantity) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "Vui lòng cung cấp id và số lượng",
      });
    }

    const updateCartItem = await CartProductModel.updateOne(
      {
        _id: _id,
        userId: userId,
      },
      {
        quantity: quantity,
      }
    );

    return response.status(200).json({
      error: false,
      success: true,
      message: "Cập nhật sản phẩm trong giỏ hàng thành công",
      data: updateCartItem,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
};

// Xóa SP trong giỏ hàng
export const deleteCartItem = async (request, response) => {
  try {
    const userId = request.userId;
    const { _id, productId } = request.body;

    if (!_id) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "Vui lòng cung cấp id",
      });
    }

    const deleteCartItem = await CartProductModel.deleteOne({
      _id: _id,
      userId: userId,
    });

    if (!deleteCartItem) {
      return response.status(404).json({
        error: true,
        success: false,
        message: "Không tìm thấy sản phẩm trong giỏ hàng",
      });
    }

    const user = await UserModel.findOne({
      _id: userId,
    });

    // const cartItems = user?.shopping_cart;

    const cartItems = user?.shopping_cart || [];

    // Kiểm tra xem productId có tồn tại trong cartItems không
    const index = cartItems.indexOf(productId);
    if (index === -1) {
      return response.status(404).json({
        error: true,
        success: false,
        message: "Sản phẩm không có trong giỏ hàng",
      });
    }

    // const updatedUserCart = [
    //   ...cartItems.slice(0, cartItems.indexOf(productId)),
    //   ...cartItems.slice(cartItems.indexOf(productId) + 1),
    // ];

    const updatedUserCart = [
      ...cartItems.slice(0, index),
      ...cartItems.slice(index + 1),
    ];

    user.shopping_cart = updatedUserCart;

    await user.save();

    return response.status(200).json({
      error: false,
      success: true,
      message: "Xóa sản phẩm trong giỏ hàng thành công",
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
};
