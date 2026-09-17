import express from "express";
import loginRouter from "./app/routes/loginRouter.js";
import registerRouter from "./app/routes/registerRouter.js";
import userRouter from "./app/routes/userRouter.js";
import "dotenv/config";
import { errorHarndler } from "./app/utils/errorHandeling.js";

const app = express();

const port = process.env.PORT || 8765;

// app.use(cors({}));
app.use(express.json());

app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/user", userRouter);

app.use((_, res) => {
	res.status(404).json({
		success: false,
		message: "Route not found",
	});
});

app.use(errorHarndler);

app.listen(port, () => {
	console.log(`Auth server running on http://localhost:${port}`);
});
