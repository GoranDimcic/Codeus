import { Router } from "express";
import authenticateToken from "../middleware/auth.middleware.js";
import { addRating, deleteRating, updateRating } from "../controllers/rating.controller.js";

const router = new Router()

router.post("/", authenticateToken, addRating)
router.put("/", authenticateToken, updateRating)
router.delete("/", authenticateToken, deleteRating)

export default router