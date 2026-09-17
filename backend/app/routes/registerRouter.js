import Router from "express";
import { registerBodySchema } from "../schemas/BodySchemas.js";
import { registerController } from "../services/registerController.js";
import { asyncWrapper } from "../utils/asyncWrapper.js";
import { validate } from "../utils/validation.js";

const router = Router();

router.post(
	"/",
	validate(registerBodySchema),
	asyncWrapper(registerController),
);

export default router;
