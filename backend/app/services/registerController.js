import { createUserDAL, findUserByEmailDAL } from "../db/dbHandle.js";
import { generateHash } from "../utils/hashing.js";

export const registerController = async (req, res) => {

	const { username, email, password } = req.body;

	const user = await findUserByEmailDAL(email);
	if (user) throw new Error("User alredy existed", 401);

	const paswordHash = await generateHash(password);

	const userData = { username, email, paswordHash };

	const newUser = await createUserDAL(userData);
	delete newUser.paswordHash;

	res.json(newUser);
};
