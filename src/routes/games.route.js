import { Router } from "express"
import { AllGames, SingleGame } from "../controllers/games.controller.js"

const router = new Router()

router.get("/", AllGames)
router.get("/:id", SingleGame)

export default router