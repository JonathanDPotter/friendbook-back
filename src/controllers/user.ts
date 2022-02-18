import { Request, Response } from "express";
import mongoose, { Error } from "mongoose";
import bcrypt from "bcrypt";
import User from "../models/user";
import { Iuser, InewUser, Ilogin } from "../interfaces/user";
import signJWT from "../utils/signJWT";

const validateToken = (req: Request, res: Response) => {
  console.log("Token validated, user authorized");
  return res
    .status(200)
    .json({ success: true, message: "Token validated, user authorized." });
};

const register = async (req: Request, res: Response) => {
  let { firstName, lastName, email, password, gender } = req.body as InewUser;

  const exists = await User.findOne({ email }).exec();

  if (exists) {
    console.log("user exists");
    return res.json({ success: false, message: "email already in use." });
  } else {
    bcrypt.hash(password, 10, (hashError, hash) => {
      if (hashError) {
        return res.json({
          success: false,
          message: hashError.message,
          error: hashError,
        });
      }

      const newUser = new User({
        _id: new mongoose.Types.ObjectId(),
        email,
        password: hash,
        firstName,
        lastName,
        gender,
      });

      return newUser
        .save()
        .then(() =>
          res
            .status(201)
            .json({ success: true, message: `Added user ${newUser.firstName}` })
        )
        .catch((error: Error) =>
          res.json({ success: false, message: error.message, error })
        );
    });
  }
};

const login = async (req: Request, res: Response) => {
  let { email, password } = req.body as Ilogin;

  try {
    const user = await User.findOne({ email }).exec();

    if (user) {
      const isAuth = await bcrypt.compare(password, user.password);

      if (isAuth) {
        signJWT(user, (error, token) => {
          if (error) res.json({ success: false, message: "Unauthorized" });
          if (token) res.status(200).json({ success: true, token });
        });
      } else {
        res.json({ success: false, message: "Unauthorized" });
      }
    } else {
      res.json({ success: false, message: "User not found." });
    }
  } catch (error: any) {
    const { message } = error;
    console.error(message, error);
    res.status(400).json({ success: false, message, error });
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params).select("-password");
    res.status(200).json({ success: true, user });
  } catch (error: any) {
    const { message } = error;
    console.error(message, error);
    res.json({ success: false, message, error });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findByIdAndUpdate(req.params, req.body, {
      new: true,
    }).select("-password");
    res.send(200).json({ success: true, user });
  } catch (error: any) {
    const { message } = error;
    console.error(message, error);
    res.status(500).json({ success: false, message, error });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  const users = await User.find().select("-password");
  res.status(200).json({ success: true, users });
};

export default {
  validateToken,
  register,
  login,
  getUser,
  updateUser,
  getAllUsers,
};
