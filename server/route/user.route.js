import { Router } from "express";
import {
  forgotPasswordController,
  loginUserController,
  logoutController,
  registerUserController,
  removeImageFromCloudinary,
  updateUserDetail,
  userAvatarController,
  verifyEmailController,
} from "../controllers/user.controller.js";

import auth from "../middlewares/auth.js";
import upload from "../middlewares/multer.js";

const userRouter = Router();

userRouter.post("/register", registerUserController);
userRouter.post("/verifyEmail", verifyEmailController);
userRouter.post("/login", loginUserController);
userRouter.get("/logout", auth, logoutController);
userRouter.put(
  "/userAvatar",
  auth,
  upload.array("avatar"),
  userAvatarController
);
userRouter.delete("/deleteImage", auth, removeImageFromCloudinary);
userRouter.put("/:id", auth, updateUserDetail);
userRouter.put("/forgotPassword", forgotPasswordController);

export default userRouter;
