import Router from "express";
import { userController } from "../services/userController.js";
import { asyncWrapper } from "../utils/asyncWrapper.js";

const router = Router();

router.get("/", asyncWrapper(userController));

export default router;
