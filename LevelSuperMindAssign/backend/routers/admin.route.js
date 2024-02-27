const express=require("express");
const AdminRouter=express.Router();
const {BlockPost,BlockUser,DeleteUser,UnBlockPost,UnBlockUser}=require("../controllers/Admin.cotroller")
const { Authentication } = require("../middlewares/Authentication");
const { AdminAuthorization } = require("../middlewares/Authorization");
const { body, validationResult,check } = require("express-validator");

AdminRouter.use(Authentication);
AdminRouter.use(AdminAuthorization);

AdminRouter.patch("/api/blockPost/:id",
[  check("id")
.exists()
.withMessage("blogId is required for blocking")
.isInt()
.withMessage("blogId must be a integer"),],
BlockPost);
AdminRouter.patch("/Api/blockUser/:id",
[  check("id")
.exists()
.withMessage("UserID is required for blocking")
.isInt()
.withMessage("UserID must be a integer"),],
BlockUser);
AdminRouter.patch("/Api/UnblockUser/:id",
[  check("id")
.exists()
.withMessage("UserID is required for Unblocking")
.isInt()
.withMessage("UserID must be a integer"),],
BlockUser);
AdminRouter.patch("/Api/UnblockPost/:id",
[  check("id")
.exists()
.withMessage("PostID is required for Unblocking")
.isInt()
.withMessage("PostID must be a integer"),],
BlockUser);
AdminRouter.delete("/api/deleteUser/:id",
[  check("id")
.exists()
.withMessage("UserID is required for deleting a user")
.isInt()
.withMessage("UserID must be a integer"),],
DeleteUser);



module.exports={
    AdminRouter
}

