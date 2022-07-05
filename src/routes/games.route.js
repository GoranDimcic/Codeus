import { Router } from "express"
import { addGame, getGamesFromCart, getGamesFromFavorite, getMostCommentedGame } from "../controllers/games.controller.js"
import authenticateToken from "../middleware/auth.middleware.js"

const router = new Router()

router.post("/", addGame)
router.get("/", authenticateToken, getGamesFromCart)
router.get("/getGameFromCart", authenticateToken, getGamesFromCart)
router.get("/getGamesFromFavorite", authenticateToken, getGamesFromFavorite)
router.get("/getMostCommentedGame", getMostCommentedGame)

export default router