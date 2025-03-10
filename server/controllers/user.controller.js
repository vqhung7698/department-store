import UserModel from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import sendEmailFun from "../config/sendEmail.js";
import VerificationEmail from "../utils/verifyEmailTemplate.js";
import generateAccessToken from "../utils/generateAccessToken.js";
import generateRefreshToken from "../utils/generateRefreshToken.js";

//Đăng ký tài khoản
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
      response.status(400).json({
        success: false,
        error: true,
        message: "Liên hệ quản trị viên để được hỗ trợ",
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
