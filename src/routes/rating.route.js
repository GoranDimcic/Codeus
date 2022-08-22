import { Router } from "express";
import { UpdateRating } from "../controllers/rating.controller.js";
import authenticateToken from "../middleware/auth.middleware.js";

const router = new Router()

router.post("/", authenticateToken, UpdateRating)

export default router