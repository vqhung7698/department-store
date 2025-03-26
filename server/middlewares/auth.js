import jwt from "jsonwebtoken";

// const auth = async (request, response) => {
//   try {
//     var token =
//       request.cookies.accessToken ||
//       request?.headers?.authorization?.split(" ")[1];

//     if(!token) {
//       token = request.query.token;
//     }

//     if (!token) {
//       return response.status(401).json({ message: "Vui lòng cung cấp token" });
//     }

//     const decode = await jwt.verify(token, process.env.SECRET_KEY_ACCESS_TOKEN);

//     if(!decode)
//     {
//         return response.status(401).json({
//             message: "Truy cập trái phép",
//             error: true,
//             success: false,
//         });
//     }

//   } catch (error) {
//     return response.status(500).json({
//       message: "Bạn chưa đăng nhập",
//       error: true,
//       success: false,
//     });
//   }
// };

// Sửa lại: thêm hàm next để chuyển đến middleware tiếp theo

const auth = async (request, response, next) => {
  try {
    const token =
      request.cookies.accessToken ||
      request?.headers?.authorization?.split(" ")[1];

    // if (!token) {
    //   token = request.query.token;
    // }

    if (!token) {
      return response.status(401).json({ message: "Vui lòng cung cấp token" });
    }

    const decode = await jwt.verify(token, process.env.SECRET_KEY_ACCESS_TOKEN);

    if (!decode) {
      return response.status(401).json({
        message: "Truy cập trái phép",
        error: true,
        success: false,
      });
    }

    // Nếu cần, gán thông tin decode vào request để sử dụng sau này
    request.userId = decode.id; // hoặc bất kỳ thuộc tính nào bạn muốn

    // Gọi next() để chuyển tiếp request sang middleware/controller tiếp theo
    next();
  } catch (error) {
    return response.status(500).json({
      message: "Bạn chưa đăng nhập",
      error: true,
      success: false,
    });
  }
};

export default auth;
