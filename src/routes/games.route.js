import { Router } from "express"
import {
    addGame, getGamesFromCart,
    getGamesFromFavorite, getMostCommentedGame,
    getMostAvgRatedGames, getMostRatedGames, getSingleGame
} from "../controllers/games.controller.js"
import authenticateToken from "../middleware/auth.middleware.js"

const router = new Router()

router.post("/", addGame)
router.get("/", authenticateToken, getGamesFromCart)
router.get("/getGameFromCart", authenticateToken, getGamesFromCart)
router.get("/getGamesFromFavorite", authenticateToken, getGamesFromFavorite)
router.get("/getMostCommentedGame", getMostCommentedGame)
router.get("/getMostAvgRatedGames", getMostAvgRatedGames)
router.get("/getMostRatedGames", getMostRatedGames)
router.get("/getSingleGame", getSingleGame)

export default router