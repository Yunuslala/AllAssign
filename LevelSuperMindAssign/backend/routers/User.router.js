const express = require("express");
const UserRouter = express.Router();
const { body, validationResult,check } = require("express-validator");
const { Authentication } = require("../middlewares/Authentication");
const { AdminAuthorization } = require("../middlewares/Authorization");
const {
  RegisterUser,
  ResetPassword,
  LoginUser,
  GetAllUser,
  GetAllBlogs,
  ParticularBlogComments,
} = require("../controllers/user.Controller");

UserRouter.post(
  "/api/register",
  body("email").trim().isEmail(),
  body("password").trim().isLength({ min: 6 }),
  body("age").notEmpty().withMessage("age is required"),
  body("gender").notEmpty().withMessage("gender is required"),
  body("role").notEmpty().withMessage("role is required"),
  RegisterUser
);
UserRouter.post(
  "/api/login",
  body("email").trim().isEmail(),
  body("password").trim().isLength({ min: 6 }),
  LoginUser
);
UserRouter.patch(
  "/api/reset/Password",
  body("email").trim().isEmail(),
  body("newPass").trim().isLength({ min: 6 }),
  ResetPassword
);
UserRouter.get("/api/AllUser",  GetAllUser);
UserRouter.get("/api/AllBlogs", Authentication, GetAllBlogs);
UserRouter.get(
  "/api/ParticualarBlogs/Comments/:blogId",
  [
    check("blogId")
      .exists()
      .withMessage("blogId is required")
      .isInt()
      .withMessage("blogId must be a integer"),
  ],
  Authentication,
  ParticularBlogComments
);

module.exports = {
  UserRouter,
};
