import { Router } from "express";
import {
  addCartItem,
  deleteCartItem,
  getCartItem,
  updateCartItem,
} from "../controllers/cart.controller.js";

const cartRouter = Router();

cartRouter.post("/createCartItem", addCartItem);
cartRouter.get("/getCartItem", getCartItem);
cartRouter.put("/updateCartItem", updateCartItem);
cartRouter.delete("/deleteCartItem", deleteCartItem);

export default cartRouter;
