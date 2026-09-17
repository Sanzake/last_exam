import { db } from "./dbInit.js";

const users = db.collection("last-exam-users");

export const createUserDAL = async (userData) => {
	await users.insertOne(userData);
	return { ...userData };
};

export const findUserByEmailDAL = async (email) => {
	console.log("log findUserByEmail", email);
	const normalizedEmail = email.toLowerCase();
	const currentUser = await users.findOne({ email: normalizedEmail });
	return currentUser;
};

export const getUsersDAL = async () => {
	const usersList = await users.find().toArray();
	return usersList;
};
