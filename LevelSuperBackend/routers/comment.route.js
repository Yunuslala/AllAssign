const express=require("express");
const CommentRouter=express.Router();
const {PostComment,UpdateComment,DeleteComments}=require("../controllers/Comment.Controller");
const { body, validationResult,check } = require("express-validator");
const { Authentication } = require("../middlewares/Authentication");
const { authPlugins } = require("mysql2");


CommentRouter.post("/api/post",
[body("comments").notEmpty().withMessage("comments is required"),
body("blogsId").notEmpty().withMessage("blogsId is required"),],
Authentication,
PostComment);
CommentRouter.patch("/api/update",[body("updatedComments").notEmpty().withMessage("updatedComments is required"),
body("commentId").notEmpty().withMessage("commentId is required"),],Authentication,UpdateComment);
CommentRouter.delete('/api/delete/:id',
[  check("id")
.exists()
.withMessage("commentId is required")
.isInt()
.withMessage("commentId must be a integer"),],
Authentication,DeleteComments);

module.exports={
    CommentRouter
}









