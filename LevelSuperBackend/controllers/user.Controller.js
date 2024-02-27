const {Users}=require("../models/userModel")
const {BlogsModel} = require('../models/BlogModel');
const {CommentModel}=require("../models/CommentModel")
const { body, validationResult } = require("express-validator");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");




const RegisterUser=async(req,res)=>{
    try {
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
        const { name, email, password, role,age,gender } = req.body;
        console.log(email)
        const CheckAvailability = await Users.findOne({where:{email:email} });
        console.log(CheckAvailability);
        if (CheckAvailability) {
          return res.status(200).send({ msg: "user already exist" });
        }
        bcrypt.hash(password, 6, async (err, hash) => {
          if (err) {
            return res.status(409).send({
              error: "Internal server error occurred during the hashing process.",
            });
          } else {
            const postUser = await Users.create({
              name,
              email,
              password: hash,
              role,
              age,
              gender
            });
            return res.status(201).send({ msg: "signup has been done" ,postUser});
          }
        });
      }  catch (error) {
        console.log(error);
        res.status(500).send({"msg":"Internal Server Error",error})
    }
}


const ResetPassword=async(req,res)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).send({ errors: errors.array() });
        }
        const {email,newPass}=req.body;
        const finduser=await Users.findOne({where:{
            email
        }});
        if(!finduser){
          return res.status(404).send({ msg: "Invalid email" });
        }
        const updatePass=await Users.update({password:newPass},{where:{
            email
        }});
        res.status(201).send({"msg":"password has been reset"})
    } catch (error) {
        console.log(error);
        res.status(500).send({"msg":"Internal Server Error",error})
    }
}


const LoginUser=async(req,res)=>{
    try {
        
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).send({ errors: errors.array() });
        }
        const { email, password } = req.body;
        let FindUser = await Users.findOne({where:{email} });
        console.log(FindUser)
        if (!FindUser) {
          res.status(404).send({ msg: "You have not exist go for signup first" });
        } else if (FindUser.isBlocked) {
          return res.status(401).send({ msg: "You have been blocked" });
        } else {
          bcrypt.compare(FindUser.password, password, (err, result) => {
            if (err) {
              return res.status(422).send({ msg: "Invalid password" });
            } else {
              const token = jwt.sign(
                { userId: FindUser.id, role: FindUser.role,email:FindUser.email },
                process.env.Secret,
                { expiresIn: "1d" }
              );
              res.status(201).send({ msg: "You logged in", token });
            }
          });
        }
      }  catch (error) {
        console.log(error);
        res.status(500).send({"msg":"Internal Server Error",error})
    }
}


const GetAllUser=async(req,res)=>{
    try {
        const AllUser=await Users.findAll({where:{
            isBlocked:false
        }});
        res.status(200).send({msg:"All users",AllUser})
    } catch (error) {
        console.log(error);
        res.status(500).send({"msg":"Internal Server Error",error})
    }
}

const GetAllBlogs=async(req,res)=>{
    try {
        const AllBlogs=await BlogsModel.findAll()
        console.log(AllBlogs)
        res.status(200).send({msg:"All blogs",AllBlogs})
    } catch (error) {
        console.log(error);
        res.status(500).send({"msg":"Internal Server Error",error})
    }
}

const ParticularBlogComments=async(req,res)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).send({ errors: errors.array() });
        }
        const BlogID=req.params.blogId
        const Comments=await CommentModel.findAll({
            where:{
                blogsId:BlogID
            }
        });
        res.status(200).send(Comments)
    } catch (error) {
        console.log(error);
        res.status(500).send({"msg":"Internal Server Error",error})
    }
}

module.exports={
    RegisterUser,ResetPassword,LoginUser,GetAllUser,GetAllBlogs,ParticularBlogComments
}