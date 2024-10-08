import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

const app = express();
dotenv.config();
app.use(express.json()); //accepts JSON files

connectDB();

app.get("/", (req, res) => {
  res.send("API IS RUNNING!");
});

app.use("/api/user", userRoutes);
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server created succesfully at ${PORT}`));
