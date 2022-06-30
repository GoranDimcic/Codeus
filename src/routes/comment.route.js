import { Router } from "express";
import { addComment } from "../controllers/comment.controller.js";
import authenticateToken from "../middleware/auth.middleware.js"

const router = new Router()

router.post("/", authenticateToken, addComment)

export default router