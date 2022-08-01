import { Router } from "express";
import { getMostRatedGames, MostCommentedGame, MostFavoritedGames } from "../controllers/browse.controller.js";

const router = new Router

router.get("/commentedGame", MostCommentedGame)
router.get("/ratingGames", getMostRatedGames)
router.get("/favoriteGames", MostFavoritedGames)

export default router