import { Router } from "express";
import auth from "../middlewares/auth.js";
import upload from "../middlewares/multer.js";
import {
  createCategory,
  deleteCategory,
  getAllCategories,
  getCategoriesById,
  getCategoriesCount,
  getSubCategoriesCount,
  removeImageFromCloudinary,
  updateCategory,
  uploadImages,
} from "../controllers/category.controller.js";

const categoryRouter = Router();

categoryRouter.post("/uploadImages", upload.array("images"), uploadImages);
categoryRouter.post("/createCategory", createCategory);
categoryRouter.get("/", getAllCategories);
categoryRouter.get("/get/count", getCategoriesCount);
categoryRouter.get("/get/count/subCat", getSubCategoriesCount);
categoryRouter.get("/:id", getCategoriesById);
categoryRouter.delete("/deleteImage", removeImageFromCloudinary);
categoryRouter.delete("/:id", deleteCategory);
categoryRouter.put("/:id", updateCategory);

export default categoryRouter;
