import { Router } from "express";
import { MostCommentedGame, MostFavoritedGames } from "../controllers/browse.controller";

const router = new Router

router.get("/commentedGame", MostCommentedGame)
router.get("/favoriteGames", MostFavoritedGames)

export default router