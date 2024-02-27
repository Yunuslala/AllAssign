const {ProfileModel}=require('../models/UserModel')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateOtp } = require("../helper/Otp")
const { format } = require("date-fns");
// const multer = require("multer");
// const cloudinaryStorage = require("multer-storage-cloudinary");
// const cloudinary = require("cloudinary").v2;
// const storage = multer.memoryStorage()
// const upload = multer({ storage });







const UserRegister = async (req, res) => {
  try {
    const { Name, email, mobile, password, confirmPassword } = req.body;
    const CheckAvailibilty = await ProfileModel.findOne({ email, mobile });
    if (CheckAvailibilty) {
      return res.status(200).send({ "msg": "User Already exist go for login" });
    }
    if (password !== confirmPassword) {
      return res.status(402).send({ "msg": "password mismatched" });
    }
    bcrypt.hash(password, 10, async(err, hash) => {
      if (err) {
        return res.status(409).send({
          error: "Internal server error occurred during the hashing process.",
        });
      } else {
        const saveUser = new ProfileModel({ Name, email, mobile, password: hash });
        await saveUser.save()
        return res.status(201).send({"msg":"user registered"})
      }
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({"msg":"something went wrong",error})
  }
}


const UserLogin = async (req, res) => {
  try {
    const { mobile } = req.body;
    const findUser = await ProfileModel.findOne({ mobile });
    if (findUser) {
      const { otp, time } = generateOtp();
     await ProfileModel.findOneAndUpdate({ mobile }, { otp, expireTime:time });
      res.status(201).send({ msg: "otp is valid for 5 minute", otp,userID:findUser._id });
    } else {
      res.status(404).send({"msg":"user is not exist"})
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "something went wrong", error });
  }
};


const ResendOtp = async (req, res) => {
  try {
    const { id } = req.params;
    const findUser = await ProfileModel.findOne({ _id: id });
    if (findUser) {
       const { otp, time } = generateOtp();
       await ProfileModel.findByIdAndUpdate(
         { _id:id },
         { otp, expireTime: time }
       );
       res
         .status(201)
         .send({ msg: "otp is valid for 5 minute", otp, userID: findUser._id });
    } else {
        res.status(404).send({ msg: "user is not exist" });
    }
  } catch (error) {
      console.log(error);
    res.status(500).send({ msg: "something went wrong", error });
  }
};

const verifyOtp = async (req, res) => {
  try {
    const { id } = req.params;
    const  Sendotp= req.body.otp;
    const findUser = await ProfileModel.findOne({ _id: id });
    if (findUser) {
      let formattedTimeHour = format(currentTime, "HH");
       let formattedTimeMinute = format(currentTime, "mm");
      let time = findUser.expireTime;
      let otp = findUser.otp;
      time = time.split(":");
     if (time[0] <= formattedTimeHour && time[1]<=formattedTimeMinute) {
       if (Sendotp == otp) {
         res.status(200).send({"msg":"otp matched",userID:findUser._id})
       } else {
          res.status(402).send({ msg: "opt is wrong" });
       }


     } else {
       res.status(402).send({"msg":"opt is expired"})
      }
    } else {
       res.status(404).send({ msg: "user is not exist wrong id" });
    }
  } catch (error) {
    console.log(error)
    res.status(500).send({ msg: "something went wrong", error });
  }
};

const updateLocation = async (req, res) => {
  try {
    const { id } = req.params;
    const { latitude, longittude } = req.body;
    const findUser = await ProfileModel.findOne({ _id: id });
    if (findUser) {
      const data = await ProfileModel.findByIdAndUpdate(
        { _id: id },
        { "location.latitude": latitude, "location.longittude": longittude }
      );
      const token = jwt.sign({ userId: findUser._id }, "secret", { expiresIn: "60d" })
      res.status(201).send({"msg":"User LogIn",data,token})

    }
    else {
       res.status(404).send({ msg: "user is not exist wrong id" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "something went wrong", error });
  }
};



const updateUserProfile = async (req, res) => {
  try {
    let image;
    let { userId, Name, email, mobile, latitude, longittude } = req.body;
     let findUser = await ProfileModel.findOne({ _id: userId });
     if (req.file) {
       image = req.file.path;
     } else {
       image=findUser.image
     }

    if (findUser) {
      if (!Name) {
        Name = findUser.Name;
      }
      if (!email) {
        email = findUser.email;
      }
      if (!mobile) {
        mobile=findUser.mobile
      }
      if (!latitude) {
        latitude = findUser.location.latitude;
      }
      if (!longittude) {
        longittude=findUser.longittude
      }
       const data= await ProfileModel.findByIdAndUpdate(
          { _id: userId },
          {
            imageName,
            email,
            mobile,
            "location.latitude": latitude,
            "location.longittude": longittude,
          }
      );
      res.status(204).send({"msg":"profile has been updated"})
 } else {
   res.status(404).send({"msg":"user does not exist invalid id"})
 }

  } catch (error) {
    res.status(500).send({ msg: "something went wrong", error });
  }
};

const getUserProfile = async (req, res) => {
  try {
    const { userId } = req.body;
    const data = await ProfileModel.findOne({ _id: userId });
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(404).send({"msg":"Invalid userId or token"})
    }
  } catch (error) {
    res.status(500).send({ msg: "something went wrong", error });
  }
};
const forgetPassword = async (req, res) => {
  try {
    
  } catch (error) {
    
  }
}
module.exports = {
  getUserProfile,
  updateLocation,
  updateUserProfile,
  verifyOtp,
  ResendOtp,
  UserLogin,
  UserRegister,
  forgetPassword,
};