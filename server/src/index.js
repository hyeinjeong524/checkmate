import express from "express";
import dotenv from "dotenv";
import cors from "cors";

/* DO NOT REMOVE */
/* Configure Environment Variables */
if (process.env.ENVIRONMENT === "DEVELOPMENT") {
	dotenv.config({ path: ".env.development" })
} else {
	dotenv.config({ path: ".env.production" })
}

const port = process.env.EXPRESS_PORT;

const app = express();

app.use(express.json());

const whitelist = ['http://localhost:3000','http://192.168.0.183:3000', 'http://localhost:8080'];

const corsOptions = {
    origin: 'http://127.0.0.1:5173',
    credentials: true,
}

app.use(cors(corsOptions));

app.get("/", (req, res) => {
	res.send("Hello, World!");
});

app.listen(port, () => {
	console.log(`Express Listening @ http://localhost:${ port }`);
});

