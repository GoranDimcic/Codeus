import { Router } from "express"
import { register, login, update, updatePassword } from "../controllers/auth.controller.js"

const router = new Router()

router.post("/register", register)
router.post("/login", login)
router.put("/update", update)
router.put("/updatePassword", updatePassword)

export default router