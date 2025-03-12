import UserModel from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import sendEmailFun from "../config/sendEmail.js";
import VerificationEmail from "../utils/verifyEmailTemplate.js";
import generateAccessToken from "../utils/generateAccessToken.js";
import generateRefreshToken from "../utils/generateRefreshToken.js";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import exp from "constants";
import { error } from "console";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

// Đăng ký tài khoản
export async function registerUserController(request, response) {
  try {
    let user;

    const { name, email, password } = request.body;
    if (!name || !email || !password) {
      return response.status(400).json({
        message: "Hãy điền vào tất cả ô trống",
        error: true,
        success: false,
      });
    }
    //Kiểm tra email có trùng không?
    const emailUser = await UserModel.findOne({ email: email });
    if (emailUser) {
      return response.json({
        message: "Email đã tồn tại",
        error: true,
        success: false,
      });
    }
    //Kiểm tra tên có trùng không?
    const nameUser = await UserModel.findOne({ name: name });
    if (nameUser) {
      return response.json({
        message: "Tên đã tồn tại",
        error: true,
        success: false,
      });
    }

    const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();

    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(password, salt);

    user = new UserModel({
      email: email,
      password: hashPassword,
      name: name,
      otp: verifyCode,
      otpExpires: Date.now() + 600000, // 10 phút
    });

    await user.save();

    //Xác thực email
    await sendEmailFun({
      sendTo: email,
      subject: "Xác thực email từ trang web Dahu",
      text: "",
      html: VerificationEmail(name, verifyCode),
    });

    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JSON_WEB_TOKEN_SECRET_KEY
    );

    return response.status(200).json({
      success: true,
      error: false,
      message: "Đăng ký thành công",
      token: token,
    });
  } catch (error) {
    return response
      .status(500)
      .json({ message: error.message || error, error: true, success: false });
  }
}

// Xác thực email
export async function verifyEmailController(request, response) {
  try {
    const { email, otp } = request.body;

    const user = await UserModel.findOne({ email: email });

    if (!user) {
      return response.status(404).json({
        success: false,
        error: true,
        message: "Không tìm thấy user",
      });
    }

    const isCodeValid = otp === user.otp;
    const isNotExpired = Date.now() < user.otpExpires;

    if (isCodeValid && isNotExpired) {
      user.verify_email = true;
      user.otp = null;
      user.otpExpires = null;
      await user.save();
      return response.status(200).json({
        success: true,
        error: false,
        message: "Xác thực email thành công",
      });
    } else if (!isCodeValid) {
      return response.status(400).json({
        success: false,
        error: true,
        message: "Mã xác thực không hợp lệ",
      });
    } else {
      return response.status(400).json({
        success: false,
        error: true,
        message: "Mã xác thực đã hết hạn",
      });
    }
  } catch (error) {
    return response
      .status(500)
      .json({ message: error.message || error, error: true, success: false });
  }
}

// Đăng nhập
export async function loginUserController(request, response) {
  const { email, password } = request.body;
  const user = await UserModel.findOne({ email: email });

  try {
    if (!user) {
      return response.status(400).json({
        success: false,
        error: true,
        message: "Chưa đăng ký tài khoản",
      });
    }

    if (user.status !== "Hoạt động") {
      return response.status(400).json({
        success: false,
        error: true,
        message: "Liên hệ quản trị viên để được hỗ trợ",
      });
    }

    if (user.verify_email !== true) {
      return response.status(400).json({
        success: false,
        error: true,
        message: "Email của bạn chưa được xác thực! Vui lòng xác thực",
      });
    }

    const checkPassword = await bcryptjs.compare(password, user.password);
    if (!checkPassword) {
      return response.status(400).json({
        success: false,
        error: true,
        message: "Sai mật khẩu",
      });
    }

    const accessToken = await generateAccessToken(user._id);
    const refreshToken = await generateRefreshToken(user._id);

    const updateUser = await UserModel.findByIdAndUpdate(user?._id, {
      last_login_date: new Date(),
    });

    const cookiesOption = {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    };

    response.cookie("accessToken", accessToken, cookiesOption);
    response.cookie("refreshToken", refreshToken, cookiesOption);

    return response.json({
      success: true,
      error: false,
      message: "Đăng nhập thành công",
      data: {
        accessToken,
        refreshToken,
      },
    });
  } catch (error) {
    return response.status(500).json({
      success: false,
      error: true,
      message: error.message || error,
    });
  }
}

// Đăng xuất
export async function logoutController(request, response) {
  try {
    const userid = request.userId;

    const cookiesOption = {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    };

    response.clearCookie("accessToken", cookiesOption);
    response.clearCookie("refreshToken", cookiesOption);

    const removeRefreshToken = await UserModel.findByIdAndUpdate(userid, {
      refreshToken: "",
    });

    return response.json({
      success: true,
      error: false,
      message: "Đăng xuất thành công",
    });
  } catch (error) {
    return response.status(500).json({
      success: false,
      error: true,
      message: error.message || error,
    });
  }
}

// Upload ảnh
var imagesArr = [];
export async function userAvatarController(request, response) {
  try {
    imagesArr = [];

    const userId = request.userId;
    const image = request.files;

    const user = await UserModel.findOne({ _id: userId });

    const imgUrl = user.avatar;

    const urlArr = imgUrl.split("/");
    const avatarImage = urlArr[urlArr.length - 1];

    const imageName = avatarImage.split(".")[0];

    if (imageName) {
      const res = await cloudinary.uploader.destroy(
        imageName,
        (error, result) => {}
      );
    }

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

    user.avatar = imagesArr[0];
    await user.save();

    return response.status(200).json({
      _id: userId,
      avatar: imagesArr[0],
    });
  } catch (error) {
    return response.status(500).json({
      success: false,
      error: true,
      message: error.message || error,
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

// Update chi tiết user
export async function updateUserDetail(request, response) {
  try {
    const userId = request.userId;
    const { name, email, mobile, password } = request.body;

    const userExist = await UserModel.findById({ userId });

    if (!userExist) {
      return response.status(400).send("Không thể cập nhật người dùng");
    }

    let verifyCode = "";

    if (email !== userExist.email) {
      verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
    }

    let hashPassword = "";

    if (password) {
      const salt = await bcryptjs.genSalt(10);
      hashPassword = await bcryptjs.hash(password, salt);
    } else {
      hashPassword = userExist.password;
    }

    const updateUser = await UserModel.findByIdAndUpdate(
      userId,
      {
        name: name,
        mobile: mobile,
        email: email,
        verify_email: email !== userExist.email ? false : true,
        password: hashPassword,
        otp: verifyCode !== "" ? verifyCode : null,
        otpExpires: verifyCode !== "" ? Date.now() + 600000 : "",
      },
      { new: true }
    );

    if (email !== userExist.email) {
      await sendEmailFun({
        sendTo: email,
        subject: "Xác thực email từ cửa hàng Dahu",
        text: "",
        html: VerificationEmail(name, verifyCode),
      });
    }

    return response.json({
      message: "Cập nhật người dùng thành công",
      user: updateUser,
      success: true,
      error: false,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}

// Quên mật khẩu
export async function forgotPasswordController(request, response) {
  try {
    const { email } = request.body;

    const user = await UserModel.findOne({ email: email });

    if (!user) {
      return response.status(400).json({
        message: "Người dùng không tồn tại",
        success: false,
        error: true,
      });
    } else {
      let verifyCode = Math.floor(100000 + Math.random() * 900000).toString();

      user.otp = verifyCode;
      user.otpExpires = Date.now() + 600000;

      await user.save();

      await sendEmailFun({
        sendTo: email,
        subject: "Xác thực email từ cửa hàng Dahu",
        text: "",
        html: VerificationEmail(user.name, verifyCode),
      });

      return response.json({
        message: "Gửi mã xác thực thành công, kiểm tra email của bạn",
        success: true,
        error: false,
      });
    }
  } catch (error) {}
}

// Xác thực OTP quên mật khẩu
export async function verifyOtpForgotPassword(request, response) {
  try {
    const { email, otp } = request.body;

    const user = await UserModel.findOne({ email: email });

    if (!user) {
      return response.status(400).json({
        message: "Người dùng không tồn tại",
        success: false,
        error: true,
      });
    }

    if (!email || !otp) {
      return response.status(400).json({
        message: "Email hoặc mã xác thực không được nhập",
        success: false,
        error: true,
      });
    }

    if (otp !== user.otp) {
      return response.status(400).json({
        message: "Mã xác thực không đúng",
        success: false,
        error: true,
      });
    }

    const currentTime = new Date().toISOString;
    if (user.otpExpires < currentTime) {
      return response.status(400).json({
        message: "Mã xác thực đã hết hạn",
        success: false,
        error: true,
      });
    }

    user.otp = "";
    user.otpExpires = "";
    await user.save();

    return response.status(400).json({
      message: "Xác thực OTP thành công",
      success: true,
      error: false,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}

//  Reset mật khẩu
export async function resetPassword(request, response) {
  try {
    const { email, newPassword, confirmPassword } = request.body;

    if (!email || !newPassword || !confirmPassword) {
      return response.status(400).json({
        message: "Vui lòng cung cấp đủ thông tin cả ba ô",
        success: false,
        error: true,
      });
    }

    const user = await UserModel.findOne({ email });

    if (!user) {
      return response.status(404).json({
        message: "Không tìm thấy tài khoản",
        success: false,
        error: true,
      });
    }

    if (newPassword !== confirmPassword) {
      return response.status(400).json({
        message: "Mật khẩu không khớp",
        success: false,
        error: true,
      });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(confirmPassword, salt);

    user.password = hashPassword;
    await user.save();
    // const update = await UserModel.findOneAndUpdate(user._id, {
    //   password: hashPassword,
    // });

    return response.status(200).json({
      message: "Đổi mật khẩu thành công",
      success: true,
      error: false,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}

// Làm mới token
export async function refreshToken(request, response) {
  try {
    const refreshToken =
      request.cookies.refreshToken ||
      request?.headers?.authorization?.split(" ")[1];

    if (!refreshToken) {
      return response.status(401).json({
        message: "Token không hợp lệ! Vui lòng cung cấp token",
        success: false,
        error: true,
      });
    }

    const verifyToken = await jwt.verify(
      refreshToken,
      process.env.SECRET_KEY_REFRESH_TOKEN
    );

    if (!verifyToken) {
      return response.status(401).json({
        message: "Token hết hạn",
        error: true,
        success: false,
      });
    }

    const userId = verifyToken?._id;
    const newAccessToken = await generateAccessToken(userId);

    const cookiesOption = {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    };

    response.cookie("accessToken", newAccessToken, cookiesOption);

    return response.status(200).json({
      message: "Token mới đã được tạo",
      success: true,
      error: false,
      data: {
        accessToken: newAccessToken,
      },
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}

// Lấy chi tiết đăng nhập
export async function userDetails(request, response) {
  try {
    const userId = request.userId;

    const user = await UserModel.findById(userId).select(
      "-password -refresh_token"
    );

    return response.status(200).json({
      message: "Lấy chi tiết đăng nhập thành công",
      success: true,
      error: false,
      data: user,
    });
  } catch (error) {
    return response.status(500).json({
      message: "Có gì đó không đúng",
      success: false,
      error: true,
    });
  }
}
