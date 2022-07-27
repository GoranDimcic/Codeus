import { Router } from "express";
import { CreateTransaction } from "../controllers/transaction.controller.js";

const router = new Router()

router.post("/", CreateTransaction)

export default router