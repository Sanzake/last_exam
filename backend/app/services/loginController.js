import { findUserByEmailDAL } from "../db/dbHandle.js";
import { compareHash } from "../utils/hashing.js";
import { generateToken } from "../utils/token.js";

export const loginController = async (req, res) => {
	const { email, password } = req.body;

	const user = await findUserByEmailDAL(email);
	if (!user) throw new Error("User not found", 404);

	const isValidPassword = await compareHash(password, user.passwordHash);
	if (!isValidPassword) throw new Error("Not valid password", 401);

	const token = generateToken(email);
	console.log(token)

	res.json(token)
};
