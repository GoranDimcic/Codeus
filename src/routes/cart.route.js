import { Router } from "express";
import { GamesFromCart, AddGameToCart, Chechout, RemoveGameFromCart } from "../controllers/cart.controller.js";
import authenticateToken from "../middleware/auth.middleware.js"

const router = new Router()

router.get("/", authenticateToken, GamesFromCart)
router.post("/", authenticateToken, AddGameToCart)
router.put("/", authenticateToken, Chechout)
router.delete("/", authenticateToken, RemoveGameFromCart)

export default router