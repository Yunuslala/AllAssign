const {UserModel}=require("../models/user.model");
const jwt=require("jsonwebtoken");
const userAuth=async(req,res)=>{
    try {
        const {name,email}=req.body;
        let firstCheck=await UserModel.find({email})
        if(firstCheck.length!=0){
            console.log(firstCheck[0]._id)
         const token=jwt.sign({"userId":firstCheck[0]._id},"secret");
           return res.status(200).send({"msg":"user is alreday authenticated",token})
        }else{
            const savedata=new UserModel({name,email});
            await savedata.save();
            console.log(savedata)
            const token=jwt.sign({"userid":savedata._id},"secret");
           return res.status(200).send({"msg":"user is authenticated",token})
        }
       
    } catch (error) {
        console.log(error)
        res.status(500).send({"msg":"internal error",error})
    }
}

module.exports={
    userAuth
}