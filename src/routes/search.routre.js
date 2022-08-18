import { Router } from "express";
import { Platforms, Search, Types } from "../controllers/search.controller.js"

const router = new Router

router.get("/", Search)
router.get("/types", Types)
router.get("/platforms", Platforms)

export default router