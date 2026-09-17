import Router from "express";
import { registerController } from "../services/registerController.js";
import { asyncWrapper } from "../utils/asyncWrapper.js";

const router = Router();

router.post("/", asyncWrapper(registerController));

export default router;
