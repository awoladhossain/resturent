import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// login User::

const loginUser = async (req, res) => {};

// create token:::::

const createToken = (id) => {
  return jwt.sign({id},process.env.JWT_SECRET);
};

// register user
const registerUser = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    const existsUser = await userModel.findOne({ email });
    if (existsUser) {
      return res.json({ success: false, message: "User Already Exists" });
    }

    // validating the email and password

    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter an valid Email",
      });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter an Strong Password",
      });
    }
    // hasing the user password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name: name,
      email: email,
      password: hashPassword,
    });

    const user = await newUser.save();
  } catch (error) {}
};

export { loginUser, registerUser };