import { Router } from "express";
import { addRating, updateRating } from "../controllers/rating.controller.js";

const router = new Router()

router.post("/addRate", addRating)
router.put("/updateRate", updateRating)

export default router