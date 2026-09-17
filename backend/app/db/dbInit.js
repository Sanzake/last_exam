import { MongoClient } from "mongodb";
import "dotenv/config";


const client = new MongoClient(process.env.MONGO_URL || "mongodb://127.0.0.1:27017/last_exam")

export const db = client.db()

try {
	await client.connect();
	console.log("DB connected");
} catch (e) {
	console.error(e);
	process.exit(1);
}
