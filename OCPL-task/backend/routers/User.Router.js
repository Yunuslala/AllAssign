const UserRouter=require("express").Router();

const {UserRegister,UserLogIn}=require('../controllers/User.Controller');
const { body, validationResult } = require("express-validator");


UserRouter.post('/Register',
body("email").trim().isEmail().withMessage("email should be in eamil format"),
body("password").trim().isLength({ min: 6 }).withMessage("password must be minimum 6 letters"),
body("mobileNumber").trim().isLength({ min: 10 }).withMessage("mobilenumber must be in a format minimum 10 letters"),
UserRegister);
UserRouter.post('/login',
body("email").trim().isEmail(),
body("password").trim().isLength({ min: 6 }).withMessage("password must be minimum 6 letters"),
UserLogIn);

module.exports={
    UserRouter
}