import { findUserByEmailDAL } from "../db/dbHandle.js";
import { AppError } from "../utils/errorHandeling.js";
import { compareToken } from "../utils/token.js";

export const userController = async (req, res) => {
	const { authorization } = req.headers;

	const email = compareToken(authorization);
	if (!email) throw new AppError("Invalid token", 401);

	const user = await findUserByEmailDAL(email);
	delete user.passwordHash

	res.json(user);
};
