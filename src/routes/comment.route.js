import { Router } from "express";
import { addComment, deleteComment, updateComment } from "../controllers/comment.controller.js";

const router = new Router()

router.post("/addComment", addComment)
router.delete("/deleteComment", deleteComment)
router.put("/updateComment", updateComment)

export default router