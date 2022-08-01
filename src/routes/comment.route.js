import { Router } from "express";
import { AddComment } from "../controllers/comment.controller.js";
import authenticateToken from "../middleware/auth.middleware.js"

const router = new Router()

router.post("/", authenticateToken, AddComment)

export default router