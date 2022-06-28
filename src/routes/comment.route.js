import { Router } from "express";
import { addComment, deleteComment } from "../controllers/comment.controller.js";

const router = new Router()

router.post("/addComment", addComment)
router.delete("/deleteComment", deleteComment)

export default router