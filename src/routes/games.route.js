import { Router } from "express"
import { AllGames, SingleGame } from "../controllers/games.controller.js"

const router = new Router()

router.get("/", AllGames)
router.post("/", SingleGame)

export default router