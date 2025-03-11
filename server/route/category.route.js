import { Router } from "express";
import auth from "../middlewares/auth.js";
import upload from "../middlewares/multer.js";
import {
  createCategory,
  getCategories,
  uploadImages,
} from "../controllers/category.controller.js";

const categoryRouter = Router();

categoryRouter.post("/uploadImages", upload.array("images"), uploadImages);
categoryRouter.post("/createCategory", createCategory);
categoryRouter.get("/", getCategories);

export default categoryRouter;
