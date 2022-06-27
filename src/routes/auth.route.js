import { Router } from "express"
import { register, login, update } from "../controllers/auth.controller.js"

const router = new Router()

router.post("/register", register)
router.post("/login", login)
router.put("/update", update)

export default router