import express from "express";
import dotenv from "dotenv";
import chats from "./data/data.js";

dotenv.config();
const app = express();
app.get("/", (req, res) => {
  res.send("API IS RUNNING!");
});
app.get("/api/chats", (req, res) => {
  res.send(chats);
});
app.get("/api/chats/:id", (req, res) => {
  console.log(req.params.id);
  const SingleChat = chats.find((required) => required._id === req.params.id);
  res.send(SingleChat);
  console.log(SingleChat);
});

const PORT = process.env.PORT||5000;

app.listen(PORT, console.log(`Server created succesfully at ${PORT}`));
