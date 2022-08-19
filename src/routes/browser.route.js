import { Router } from "express";
import { BrowseGames } from "../controllers/browse.controller.js";

const router = new Router

router.get("/", BrowseGames)

export default router