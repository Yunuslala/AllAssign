const express=require("express");
const UserRouter=express.Router();
const {SignUP,Login}=require('../controllers/User.Controller')
UserRouter.post('/signup',SignUP);
UserRouter.post("/login",Login);

module.exports={
    UserRouter
}