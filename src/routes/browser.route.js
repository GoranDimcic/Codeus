import { Router } from "express";
import { MostRatedGames, MostCommentedGame, MostFavoritedGames, RandomGames } from "../controllers/browse.controller.js";

const router = new Router

router.get("/commentedGame", MostCommentedGame)
router.get("/ratingGames", MostRatedGames)
router.get("/favoriteGames", MostFavoritedGames)
router.get("/randomGames", RandomGames)

export default router