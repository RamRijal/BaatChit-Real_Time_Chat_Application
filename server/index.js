import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

dotenv.config();

connectDB();

app.use(express.json())//accepts JSON files

app.get("/", (req, res) => {
  res.send("API IS RUNNING!");
});

app.use("api/user", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server created succesfully at ${PORT}`));
