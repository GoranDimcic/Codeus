import { Router } from "express";
import { MostCommentedGame, AddComment } from "../controllers/comment.controller.js";
import authenticateToken from "../middleware/auth.middleware.js"

const router = new Router()

router.get("/", MostCommentedGame)
router.post("/", authenticateToken, AddComment)

export default router