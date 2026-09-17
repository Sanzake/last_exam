import { createUserDAL, findUserByEmailDAL } from "../db/dbHandle.js";
import { generateHash } from "../utils/hashing.js";

export const registerController = async (req, res) => {
	const { username, email, password } = req.body;

	const user = await findUserByEmailDAL(email);
	if (user) throw new Error("User alredy existed", 401);

	const passwordHash = await generateHash(password);

	const userData = { username, email, passwordHash };

	const newUser = await createUserDAL(userData);
	delete newUser.passwordHash;

	res.json(newUser);
};
