import { Router } from "express"
import { addGame, getGamesFromCart, getGamesFromFavorite } from "../controllers/games.controller.js"
import authenticateToken from "../middleware/auth.middleware.js"

const router = new Router()

router.post("/", addGame)
router.get("/", authenticateToken, getGamesFromCart)
router.get("/favorite", authenticateToken, getGamesFromFavorite)

export default router