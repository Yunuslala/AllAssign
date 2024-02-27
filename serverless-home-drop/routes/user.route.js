const express=require("express");
const userRouter=express.Router();;
const {userAuth}=require("../controller/user.controller")

userRouter.post("/auth",userAuth);

module.exports={
    userRouter
}