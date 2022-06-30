import { Router } from "express"
import authenticateToken from "../middleware/auth.middleware.js"
import { register, login, update, updatePassword } from "../controllers/auth.controller.js"

const router = new Router()

router.post("/register", register)
router.post("/login", login)
router.put("/update", authenticateToken, update)
router.put("/updatePassword", updatePassword)

export default router