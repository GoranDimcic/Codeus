import { Router } from "express";
import { addRating, deleteRating, updateRating } from "../controllers/rating.controller.js";
import authenticateToken from "../middleware/auth.middleware.js";

const router = new Router()

router.post("/", authenticateToken, addRating)
router.put("/", authenticateToken, updateRating)
router.delete("/", authenticateToken, deleteRating)

export default router