import UserModel from "../models/user.model";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import sendEmailFun from "../config/sendEmail.js";
import VerificationEmail from "../utils/verifyEmailTemplate.js";

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
    user = await UserModel.findOne({ email });
    if (user) {
      return response.json({
        message: "Email đã tồn tại",
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
    const verifyEmail = await sendEmailFun({
      sendTo: email,
      subject: "Xác thực email từ trang web Dahu",
      html: VerificationEmail(name, verifyCode),
      text: "",
    });

    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JSON_WEB_TOKEN_SECRET_KEY
    );

    return response.status(200).json({
      success: true,
      message: "Đăng ký thành công",
      token: token,
    });
  } catch (error) {
    return response
      .status(500)
      .json({ message: error.message || error, error: true, success: false });
  }
}
