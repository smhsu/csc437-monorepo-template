import express from "express";
import dotenv from "dotenv";
import { SHARED_TEST } from "./shared/example.js";

dotenv.config(); // Read the .env file in the current working directory, and load values into process.env.
const PORT = process.env.PORT || 3000;

const app = express();

app.get("/hello", (req, res) => {
    res.send("Hello, World " + SHARED_TEST);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}.  CTRL+C to stop.`);
});
