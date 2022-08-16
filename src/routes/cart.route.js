import { Router } from "express";
import { GamesFromCart, AddGameToCart, Checkout, RemoveGameFromCart } from "../controllers/cart.controller.js";
import authenticateToken from "../middleware/auth.middleware.js"

const router = new Router()

router.get("/", authenticateToken, GamesFromCart)
router.post("/", authenticateToken, AddGameToCart)
router.put("/", authenticateToken, Checkout)
router.delete("/:id", authenticateToken, RemoveGameFromCart)

export default router