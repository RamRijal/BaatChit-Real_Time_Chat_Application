import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    picture: {
      type: String,
      default:
        "https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=740&t=st=1724236046~exp=1724236646~hmac=dca5d599daf9e73dfeb094a688e07e065299194af4aea4dc23e729e3aea16e95",
    },
  },
  { timestamps: true }
);

// Before saving runs function/middleware
UserSchema.pre("save", async function (next) {
  // if the current pwd is not modified,moveon to the next function
  if (!this.isModified) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = bcrypt.hash(this.password, salt);
});

UserSchema.methods.matchPassword = async (enteredPassword) => {
  return await bcrypt.compare(enteredPassword, this.password);
};
const User = mongoose.model("User", UserSchema);
export default User;
