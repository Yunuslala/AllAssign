const express = require("express");
const UserRoute = express.Router();
const { userSignup, userLogin } = require("../controllers/user.controller");
const { body, validationResult } = require("express-validator");


UserRoute.post(
  "/signup",
  body("email").trim().isEmail(),
  body("password").trim().isLength({ min: 6 }),
  body("mobileNumber").trim().isLength({ min: 10 }),
  userSignup
);
UserRoute.post(
  "/login",
  body("email").trim().isEmail(),
  body("password").trim().isLength({ min: 6 }),
  userLogin
);

module.exports = {
  UserRoute,
};
