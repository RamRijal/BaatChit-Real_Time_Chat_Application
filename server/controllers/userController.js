import generateToken from "../config/token.js";
import User from "../models/userModel.js";

const registerUser = async (req, res) => {
  const { name, email, password, picture } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new error("Please enter each field ");
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    picture,
  });

  if (user) {
    res.status(201).json({
      success: true,
      message: "User created successfully",
      _id: user._id,
      name: user.name,
      email: user.email,
      picture: user.picture,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json({
      success: false,
      message: "Failed to create user",
    });
  }
};

export default registerUser;
