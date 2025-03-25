import { Router } from "express";
import {
  forgotPasswordController,
  loginAdminController,
  logoutController,
  refreshToken,
  registerAdminController,
  removeImageFromCloudinary,
  resetPassword,
  // updateAdminDetail,
  adminAvatarController,
  // adminDetails,
  verifyEmailController,
  verifyOtpForgotPassword,
} from "../controllers/admin.controller.js";

import auth from "../middlewares/auth.js";
import upload from "../middlewares/multer.js";

const adminRouter = Router();

adminRouter.post("/register", registerAdminController);
adminRouter.post("/verifyEmail", verifyEmailController);
adminRouter.post("/login", loginAdminController);
adminRouter.get("/logout", auth, logoutController);
adminRouter.put(
  "/adminAvatar",
  auth,
  upload.array("avatar"),
  adminAvatarController
);
adminRouter.delete("/deleteImage", auth, removeImageFromCloudinary);
// adminRouter.put("/:id", auth, updateAdminDetail);
adminRouter.post("/forgotPassword", forgotPasswordController);
adminRouter.post("/verifyOtpForgotPassword", verifyOtpForgotPassword);
adminRouter.post("/resetPassword", resetPassword);
adminRouter.post("/refreshToken", refreshToken);
// adminRouter.get("/adminDetails", auth, adminDetails);

export default adminRouter;

// import process from "process";
// import dotenv from "dotenv";
// dotenv.config();
// import express from "express";
// import bcrypt from "bcrypt";
// import admin from "../models/admin.model.js"; // lưu ý extension .js nếu dùng ES Modules

// const router = express.Router();

// // Endpoint POST /admin/register
// router.post("/register", async (req, res) => {
//   // Kiểm tra token bảo mật trong header (ví dụ: x-admin-token)
//   const token = req.headers["x-admin-token"];
//   if (!token || token !== process.env.ADMIN_REGISTRATION_TOKEN) {
//     return res.status(403).json({ error: "Truy cấp trái phép" });
//   }

//   // Nếu muốn cho phép tạo admin duy nhất, có thể kiểm tra xem đã có admin nào chưa
//   const existingAdmin = await admin.findOne({ role: "admin" });
//   if (existingAdmin) {
//     return res.status(400).json({ error: "Tài khoản admin đã tồn tại" });
//   }

//   // Lấy email và password từ body
//   const { email, password } = req.body;
//   if (!email || !password) {
//     return res.status(400).json({ error: "Phải cung cấp email và password" });
//   }

//   try {
//     // Mã hoá mật khẩu
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const admin = new admin({
//       email,
//       password: hashedPassword,
//       role: "admin",
//     });

//     await admin.save();
//     return res
//       .status(201)
//       .json({ message: "Tài khoản admin được tạo thành công" });
//   } catch (error) {
//     console.error("Error creating admin:", error);
//     return res.status(500).json({ error: "Lỗi server" });
//   }
// });

// export default router;
