import { Router } from "express";
import { createTransaction } from "../controllers/transaction.controller.js";

const router = new Router()

router.post("/", createTransaction)

export default router