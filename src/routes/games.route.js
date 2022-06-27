import { Router } from "express"
import { addGame } from "../controllers/games.controller.js"

const router = new Router()

router.post("/addGame", addGame)

export default router