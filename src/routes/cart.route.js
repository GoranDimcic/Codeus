import { Router } from "express";
import { createCart } from "../controllers/cart.controller.js";

const router = new Router()

router.post("/createCart", createCart)

export default router