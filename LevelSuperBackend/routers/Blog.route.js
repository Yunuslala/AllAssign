const express=require("express");
const BlogRouter=express.Router();
const {PostBlog,UpdateBlog,DeleteBlogs}=require("../controllers/Blog.Controller");
const { Authentication } = require("../middlewares/Authentication");
const { authorAuthorization } = require("../middlewares/Authorization");
const { body, validationResult,check } = require("express-validator");

BlogRouter.use(Authentication);
BlogRouter.use(authorAuthorization);

BlogRouter.post("/api/post",
body("title").notEmpty().withMessage("title is required"),
body("Content").notEmpty().withMessage("Content is required"),
body("Description").notEmpty().withMessage("Description is required"),
PostBlog);
BlogRouter.patch("/api/update",
UpdateBlog);
BlogRouter.delete('/api/delete/:id',
[  check("id")
.exists()
.withMessage("blogId is required")
.isInt()
.withMessage("blogId must be a integer"),],

DeleteBlogs);

module.exports={
    BlogRouter
}