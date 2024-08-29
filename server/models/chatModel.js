import mongoose, { Mongoose } from "mongoose";

const chatModelSchema = mongoose.Schema(
  {
    chatId: { type: String, trim: true },
    chatName: { type: String, default: true },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    latestMessages: { type: mongoose.Schema.Types.ObjectId, ref: "Messages" },
    groupAdmin: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Chat = mongoose.model("Chat", chatModelSchema);

export default Chat;