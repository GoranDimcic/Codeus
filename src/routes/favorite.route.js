import { Router } from "express";
import { addFavorite, addGamePlatform, deleteFavorite } from "../controllers/favorite.controller.js"
import authenticateToken from "../middleware/auth.middleware.js";

const router = new Router

router.post("/", authenticateToken, addFavorite)
router.delete("/", authenticateToken, deleteFavorite)
router.post("/addPlatform", addGamePlatform)

export default router