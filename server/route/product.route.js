import { Router } from "express";
import auth from "../middlewares/auth.js";
import upload from "../middlewares/multer.js";
import {
  createProduct,
  deleteProduct,
  getAllFeaturedProducts,
  getAllProducts,
  getAllProductsByCatId,
  getAllProductsByCatName,
  getAllProductsByPrice,
  getAllProductsByRating,
  getAllProductsBySubCatId,
  getAllProductsBySubCatName,
  getAllProductsByThirdSubCatId,
  getAllProductsByThirdSubCatName,
  getAllProductsCount,
  getProduct,
  updateProduct,
  uploadImages,
} from "../controllers/product.controller.js";
import { removeImageFromCloudinary } from "../controllers/category.controller.js";

const productRouter = Router();
productRouter.post("/uploadImages", upload.array("images"), uploadImages);
productRouter.post("/createProduct", createProduct);
productRouter.get("/getAllProducts", getAllProducts);
productRouter.get("/getAllProductsByCatId/:id", getAllProductsByCatId);
productRouter.get("/getAllProductsByCatName", getAllProductsByCatName);
productRouter.get("/getAllProductsBySubCatId/:id", getAllProductsBySubCatId);
productRouter.get("/getAllProductsBySubCatName", getAllProductsBySubCatName);
productRouter.get(
  "/getAllProductsByThirdSubCatId/:id",
  getAllProductsByThirdSubCatId
);
productRouter.get(
  "/getAllProductsByThirdSubCatName",
  getAllProductsByThirdSubCatName
);
productRouter.get("/getAllProductsByPrice", getAllProductsByPrice);
productRouter.get("/getAllProductsByRating", getAllProductsByRating);
productRouter.get("/getAllProductsCount", getAllProductsCount);
productRouter.get("/getAllFeaturedProducts", getAllFeaturedProducts);
productRouter.delete("/:id", deleteProduct);
productRouter.get("/:id", getProduct);
productRouter.delete("/deleteImage", removeImageFromCloudinary);
productRouter.put("/updateProduct/:id", updateProduct);

export default productRouter;
