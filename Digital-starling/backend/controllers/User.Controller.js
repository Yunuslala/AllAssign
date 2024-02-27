const {UserModel}=require('../models/User.Model');
const bcrypt=require('bcrypt');
const jwt=require("jsonwebtoken")
const SignUP=async(req,res)=>{
    try {
        const {email,fullName,password,contact}=req.body;
        let IfExist=await UserModel.findOne({email});
        if(IfExist){
            return res.status(200).send({"msg":"user already exist",user:IfExist})
        }else{
            bcrypt.hash(password,5,async(err,hash)=>{
                if(hash){
                    const saveData=new UserModel({email,fullName,password:hash,contact});
                    await saveData.save();
                    res.status(201).send({"msg":"User has been signUp",user:saveData});
                }else{
                    console.log(err)
                    res.status(402).send({"msg":"error in hashing the password",err})
                }
            })
           
        }
      
    } catch (error) {
        console.log(error);
        res.status(500).send({"msg":"something went wrong",error})
    }
}

const Login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        let FindUser=await UserModel.findOne({email});
        if(FindUser){
            bcrypt.compare(password,FindUser.password,(err,result)=>{
                if(err){
                    res.status(401).send({"msg":"wrong password"})
                }else{
                    const token = jwt.sign(
                        { userId: FindUser._id,},
                        "Secret",
                        { expiresIn: "3h" }
                      );
                    res.status(201).send({"msg":"Login Sucessful",user:FindUser,token})
                }
            })
        }else{
            res.status(402).send({"msg":"Go for Signup You are not registered"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({"msg":"something went wrong",error})
    }
}

module.exports={
    SignUP,Login
}