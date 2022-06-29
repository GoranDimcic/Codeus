import { Router } from "express";
import { addFavorite, addGamePlatform, deleteFavorite } from "../controllers/favorite.controller.js"

const router = new Router

router.post("/addFavorite", addFavorite)
router.delete("/deleteFavorite", deleteFavorite)
router.post("/addPlatform", addGamePlatform)

export default router