import { Router } from "express";
import { loginController } from "../services/loginController.js";
import { asyncWrapper } from "../utils/asyncWrapper.js";

const router = Router();

router.post("/", asyncWrapper(loginController));

export default router;
