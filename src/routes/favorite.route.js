import { Router } from "express";
import { addFavorite, deleteFavorite } from "../controllers/favorite.controller.js"
import authenticateToken from "../middleware/auth.middleware.js";

const router = new Router

router.post("/", authenticateToken, addFavorite)
router.delete("/", authenticateToken, deleteFavorite)

export default router