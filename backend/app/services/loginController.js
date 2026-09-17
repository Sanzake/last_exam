import { findUserByEmailDAL } from "../db/dbHandle.js";
import { AppError } from "../utils/errorHandeling.js";
import { compareHash } from "../utils/hashing.js";
import { generateToken } from "../utils/token.js";

export const loginController = async (req, res) => {
	const { email, password } = req.body;

	const user = await findUserByEmailDAL(email);
	if (!user) throw new AppError("User not found", 404);

	const isValidPassword = await compareHash(password, user.passwordHash);
	if (!isValidPassword) throw new AppError("Not valid password", 401);

	const token = generateToken(email);
	console.log(token)

	res.json(token)
};
