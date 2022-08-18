import { Router } from "express";
import { AddRating, UpdateRating } from "../controllers/rating.controller.js";
import authenticateToken from "../middleware/auth.middleware.js";

const router = new Router()

router.post("/", authenticateToken, AddRating)
router.put("/", authenticateToken, UpdateRating)

export default router