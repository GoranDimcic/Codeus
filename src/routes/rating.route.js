import { Router } from "express";
import { createRating, updateRating} from "../controllers/rating.controller.js";

const router = new Router()

router.post("/createRate", createRating)
router.post("/updateRate", updateRating)

export default router