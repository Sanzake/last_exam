import { Router } from "express";
import { loginController } from "../services/loginController.js";

const router = Router()

router.post("/", loginController)

export default router