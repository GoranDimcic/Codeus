import { Router } from "express";
import { addToCart, chechout, removeFromCart } from "../controllers/cart.controller.js";
import authenticateToken from "../middleware/auth.middleware.js"

const router = new Router()

router.post("/", authenticateToken, addToCart)
router.put("/", authenticateToken, chechout)
router.delete("/", authenticateToken, removeFromCart)

export default router