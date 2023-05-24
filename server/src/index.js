import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dayRoute from "./dayRoute.js";
import mongoose from "mongoose";

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

const whitelist = ['http://localhost:3000', 'http://192.168.0.183:3000', 'http://localhost:8080', 'http://127.0.0.1:5173'];

const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
};
app.use(cors(corsOptions));

app.use(dayRoute);
app.use("/api", dayRoute);

app.get("/", (req, res) => {
	res.send("Hello, World!");
});

// Connect to MongoDB
const OMongooseOption = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(process.env.MONGO_URI, OMongooseOption).then(
    () => { console.log("[Mongoose] Connection Complete!") },
    (err) => { console.log(`[Mongoose] Connection Error: ${ err }`) }
);

app.listen(port, () => {
	console.log(`Express Listening @ http://localhost:${ port }`);
});

