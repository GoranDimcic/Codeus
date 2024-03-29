import { Router } from "express"
import { SingleGame } from "../controllers/games.controller.js"

const router = new Router()

router.get("/:id", SingleGame)

export default router