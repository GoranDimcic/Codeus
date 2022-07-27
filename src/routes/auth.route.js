import { Router } from "express"
import { Register, Login} from "../controllers/auth.controller.js"

const router = new Router()

router.post("/register", Register)
router.post("/login", Login)

export default router