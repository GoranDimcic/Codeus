import { Router } from "express";
import { AddRating, UpdateRating, DeleteRating } from "../controllers/rating.controller.js";
import authenticateToken from "../middleware/auth.middleware.js";

const router = new Router()

router.post("/", authenticateToken, AddRating)
router.put("/", authenticateToken, UpdateRating)
router.delete("/", authenticateToken, DeleteRating)

export default router