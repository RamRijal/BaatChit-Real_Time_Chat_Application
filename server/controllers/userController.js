import expressAsyncHandler from "express-async-handler";
import generateToken from "../config/token.js";
import User from "../models/userModel.js";

export const registerUser = async (req, res) => {
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

export const authUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await User.matchPasssword(password))) {
    // const isMatch=await bcrypt.compare(password,user.password);
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      picture: user.picture,
      token: generateToken(user._id),
    });
  } else {
    res.json(401);
    throw new Error("Invalid Email or Password");
  }
});

// API not working at all for registering the new user in postman
