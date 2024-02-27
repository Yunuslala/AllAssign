const express = require("express");
const {blockUser,DeleteProduct,deleteUser}=require("../controllers/Admin.controller")
const {
    VendorAuthorization,
    AdminAuthorization,
  } = require("../middlewares/authorization");
  const { Authentication } = require("../middlewares/authentication");

  const AdminRouter=express.Router();
AdminRouter.use(Authentication);
AdminRouter.use(AdminAuthorization)
  AdminRouter.patch('/user/block/:id',blockUser);
  AdminRouter.delete('/user/delete/:userId',deleteUser)
  AdminRouter.delete('/product/delete/:productId',DeleteProduct)


  module.exports={
    AdminRouter
  }