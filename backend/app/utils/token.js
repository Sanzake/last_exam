import jwt from "jsonwebtoken";
import "dotenv/config"


export const generateToken = (payload) => {
	return jwt.sign(payload, process.env.SECRET_KEY);
};

