import { Router } from "express";
import { addFavorite, deleteFavorite } from "../controllers/favorite.controller.js"

const router = new Router

router.post("/addFavorite", addFavorite)
router.delete("/deleteFavorite", deleteFavorite)

export default router