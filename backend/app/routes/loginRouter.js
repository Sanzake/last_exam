import { Router } from "express";
import { loginBodySchema } from "../schemas/BodySchemas.js";
import { loginController } from "../services/loginController.js";
import { asyncWrapper } from "../utils/asyncWrapper.js";
import { validate } from "../utils/validation.js";

const router = Router();

router.post("/", validate(loginBodySchema), asyncWrapper(loginController));

export default router;
