import { MongoClient } from "mongodb";
import "dotenv/config";


const client = new MongoClient("mongodb://localhost:27017/last_exam",)

export const db = client.db()

try {
	await client.connect();
	console.log("DB connected");
} catch (e) {
	console.error(e);
	process.exit(1);
}
