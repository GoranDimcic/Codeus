import { Router } from "express";
import { Search } from "../controllers/search.controller.js"

const router = new Router

router.get("/", Search)

export default router