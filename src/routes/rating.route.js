import { Router } from "express";
import { MostAvgRatedGames, AddRating, UpdateRating, DeleteRating } from "../controllers/rating.controller.js";
import authenticateToken from "../middleware/auth.middleware.js";

const router = new Router()

router.get("/", MostAvgRatedGames)
router.post("/", authenticateToken, AddRating)
router.put("/", authenticateToken, UpdateRating)
router.delete("/", authenticateToken, DeleteRating)

export default router