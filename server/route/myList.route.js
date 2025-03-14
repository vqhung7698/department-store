import { Router } from "express";
import cartRouter from "./cart.route.js";
import {
  addProductToMyList,
  getProductsFromMyList,
  removeProductFromMyList,
} from "../controllers/mylist.controller.js";

const myListRouter = Router();

myListRouter.get("/", getProductsFromMyList);
myListRouter.post("/addProductToMyList", addProductToMyList);
myListRouter.delete("/:id", removeProductFromMyList);

export default myListRouter;
