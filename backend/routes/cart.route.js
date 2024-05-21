import express from "express";
import {
  addToCart,
  getCart,
  removeFromCart,
} from "../controllers/cart.controller.js";
import authMiddleWare from "../middlewares/auth.js";

const cartRouter = express.Router();

cartRouter.post("/add", authMiddleWare, addToCart);

cartRouter.post("/get", authMiddleWare, getCart);

cartRouter.post("/remove", authMiddleWare, removeFromCart);

export default cartRouter;
