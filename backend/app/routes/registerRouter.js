import Router from "express";
import { registerController } from "../services/registerController.js";

const router = Router()

router.post("/", registerController)

export default router