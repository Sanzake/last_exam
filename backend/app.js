import express from "express";
import registerRouter from "./app/routes/registerRouter.js";
import "dotenv/config";

const app = express();

const port = 8765;

// app.use(cors({}));
app.use(express.json());

app.use("/register", registerRouter);
// app.use("/login")

app.use((_, res) => {
	res.status(404).json({
		success: false,
		message: "Route not found",
	});
});

app.listen(port, () => {
	console.log(`Auth server running on http://localhost:${port}`);
});
