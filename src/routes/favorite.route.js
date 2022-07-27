import { Router } from "express";
import { AddFavorite, DeleteFavorite, GamesFromFavorite } from "../controllers/favorite.controller.js"
import authenticateToken from "../middleware/auth.middleware.js";

const router = new Router

router.get("/", authenticateToken, GamesFromFavorite)
router.post("/", authenticateToken, AddFavorite)
router.delete("/", authenticateToken, DeleteFavorite)

export default router