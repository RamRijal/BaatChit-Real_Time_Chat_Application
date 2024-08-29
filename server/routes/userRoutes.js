import express from "express";
import registerUser from "../controllers/userController.js";

const router = express.Router();

router.post("/", registerUser);

// router.route("/login", authUser);

export default router;
