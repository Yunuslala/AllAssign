const express = require("express");
const userRouter = express.Router();
const { body, validationResult } = require("express-validator");

const {UserSignup,UserLogin}=require("../controllers/UserController")


userRouter.post(
  "/signup",
  body("name").trim().isLength({ min: 1 }),
  body("email").trim().isEmail(),
  body("password").trim().isLength({ min: 6 }),
  UserSignup
);

userRouter.post(
  "/login",
  body("email").trim().isEmail(),
  body("password").trim().isLength({ min: 6 }),
  UserLogin
);

module.exports = { userRouter };
