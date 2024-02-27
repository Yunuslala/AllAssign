const { ProfileModel } = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateOtp } = require("../helper/Otp");
const { format } = require("date-fns");
const { VerifyProfile } = require("../models/Verification.model");
const mongoose=require("mongoose")
const UserRegister = async (req, res) => {
  try {
    const { Name, email, mobile, password, confirmPassword } = req.body;

      const CheckAvailibiltyThroughEmail = await ProfileModel.findOne({
        email,
      });
      const CheckAvailibiltyThroughNumber = await ProfileModel.findOne({
        mobile,
      });
      if (CheckAvailibiltyThroughEmail) {
        return res
          .status(200)
          .send({ msg: "User email Already exist go for login" });
      }
      if (CheckAvailibiltyThroughNumber) {
        return res
          .status(200)
          .send({ msg: "User Number Already exist go for login" });
      }
    const CheckAvailibilty = await ProfileModel.findOne({ email, mobile });
  
    if (CheckAvailibilty) {
      return res.status(200).send({ msg: "User Already exist go for login" });
    }
    if (password !== confirmPassword) {
      return res.status(402).send({ msg: "password mismatched" });
    }
    await bcrypt.hash(password, 10, async (err, hash) => {
      if (err) {
        return res.status(409).send({
          error: "Internal server error occurred during the hashing process.",
        });
      } else {
        const saveUser = new ProfileModel({
          Name,
          email,
          mobile,
          password: hash,
        });
        await saveUser.save();
        return res.status(201).send({ msg: "user registered" });
      }
    });
  } catch (error) {
     if (error.code === 11000) {
      return res
         .status(500)
         .send("Duplicate key error:", error.message, error.keyValue);

     } else {
         console.log("error", error);
         return res.status(500).send({ msg: "something went wrong", error });
     }
  
  }
};

const UserLogin = async (req, res) => {
  try {
    const { mobile } = req.body;
    const findUser = await ProfileModel.findOne({ mobile });
    if (findUser) {
      const otp = generateOtp();
       console.log("otpContorller", otp);
      await ProfileModel.findOneAndUpdate(
        { mobile },
        { otp:otp.otp, expireTime: otp.time }
      );
     
      return res
        .status(201)
        .send({ msg: "otp is valid for 1 minute", otp:otp.otp, userID: findUser._id });
    } else {
      return res.status(404).send({ msg: "user is not exist" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "something went wrong", error });
  }
};

const ResendOtp = async (req, res) => {
  try {
    const { id } = req.params;
    const findUser = await ProfileModel.findOne({ _id: id });
    if (findUser) {
      const  otp = generateOtp();
      await ProfileModel.findByIdAndUpdate(
        { _id: id },
        { otp:otp.otp, expireTime: otp.time }
      );
     return res
        .status(201)
        .send({ msg: "otp is valid for 1 minute", otp:otp.otp, userID: findUser._id });
    } else {
     return res.status(404).send({ msg: "user is not exist" });
    }
  } catch (error) {
    console.log(error);
   return res.status(500).send({ msg: "something went wrong", error });
  }
};

const verifyOtp = async (req, res) => {
  try {
    const { id } = req.params;
    const Sendotp = req.body.otp;
     const currentTime = new Date();
    const findUser = await ProfileModel.findOne({ _id: id });
    if (findUser) {
      let formattedTimeHour = format(currentTime, "HH");
      let formattedTimeMinute = format(currentTime, "mm");
      let time = findUser.expireTime;
      let otp = findUser.otp;
      time = time.split(":");
      console.log("time", time, formattedTimeHour,formattedTimeMinute);
      if (time[0] >= formattedTimeHour && time[1] >= formattedTimeMinute) {
        if (Sendotp == otp) {
           const token = jwt.sign(
             {
               userId: findUser._id,
               role: findUser.role,
               email: findUser.email,
             },
             "secret",
             {
               expiresIn: "60d",
             }
          );
          await ProfileModel.findOneAndUpdate({ _id: id }, { verifyOtp:true });
         return res
            .status(200)
            .send({ msg: "otp matched", userID: findUser._id, token });
        } else {
         return res.status(402).send({ msg: "opt is wrong" });
        }
      } else {
       return res.status(402).send({ msg: "opt is expired" });
      }
    } else {
     return res.status(404).send({ msg: "user is not exist wrong id" });
    }
  } catch (error) {
    console.log(error);
   return res.status(500).send({ msg: "something went wrong", error });
  }
};

const updateLocation = async (req, res) => {
  try {
    const { latitude, longittude,UserId } = req.body;
    const findUser = await ProfileModel.findOne({ _id: UserId });
    if (findUser) {
      const data = await ProfileModel.findByIdAndUpdate(
        { _id: UserId },
        { "location.latitude": latitude, "location.longittude": longittude },{new:true}
      );
     
     return res.status(201).send({ msg: "location is updated", data});
    } else {
     return res.status(404).send({ msg: "user is not exist wrong id" });
    }
  } catch (error) {
    console.log(error);
   return res.status(500).send({ msg: "something went wrong", error });
  }
};

const updateUserProfile = async (req, res) => {
  try {
    let { UserId, Name, email, mobile, latitude, longittude } = req.body;
    let findUser = await ProfileModel.findOne({ _id: UserId });
    if (findUser) {
      if (!Name) {
        Name = findUser.Name;
      }
      if (!email) {
        email = findUser.email;
      }
      if (!mobile) {
        mobile = findUser.mobile;
      }
      if (!latitude) {
        latitude = findUser.location.latitude;
      }
      if (!longittude) {
        longittude = findUser.location.longittude;
      }
      console.log("data", {
        UserId,
        Name,
        email,
        mobile,
        latitude,
        longittude,
      });
      const data = await ProfileModel.findByIdAndUpdate(
        { _id: UserId },
        {
          email,
          mobile,
          "location.latitude": latitude,
          "location.longittude": longittude,
        },{new:true}
      );
      return res.status(201).send({ msg: "profile has been updated", data });
    } else {
     return res.status(404).send({ msg: "user does not exist invalid id" });
    }
  } catch (error) {
    console.log(error)
   return res.status(500).send({ msg: "something went wrong", error });
  }
};

const getUserProfile = async (req, res) => {
  try {
    const { UserId } = req.body;
    const data = await ProfileModel.findOne({ _id: UserId });
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(404).send({ msg: "Invalid UserId or token" });
    }
  } catch (error) {
    res.status(500).send({ msg: "something went wrong", error });
  }
};
const forgetPassword = async (req, res) => {
  try {
  } catch (error) {}
};

const UploadDocuments = async (req, res) => {
  try {
    let licensefront;
    let licenseback;
    let Adharfront;
    let Adharback;
    let selfie;
    let { UserId } = req.body;
    console.log("userid", req.body);
    let findExisting = await VerifyProfile.findOne({ UserId });
    if (req.files["frontlicense"]) {
      let frontlicense = req.files["frontlicense"];
      licensefront = frontlicense[0].path;
    } else {
      licensefront = findExisting.drivingLicensefront;
    }
    if (req.files["backlicense"]) {
      let backlicense = req.files["backlicense"];
      licenseback = backlicense[0].path;
    } else {
      licenseback = findExisting.drivingLicenseback;
    }
    if (req.files["frontAdhar"]) {
      let frontAdhar = req.files["frontAdhar"];
      Adharfront = frontAdhar[0].path;
    } else {
      Adharfront = findExisting.aadhaarCardfront;
    }
    if (req.files["backAdhar"]) {
      let backAdhar = req.files["backAdhar"];
      Adharback = backAdhar[0].path;
    } else {
      Adharback = findExisting.aadhaarCardback;
    }
    if (req.files["Selfie"]) {
      let SelfieFile = req.files["Selfie"];
      selfie = SelfieFile[0].path;
    } else {
      selfie = findExisting.selfie;
    }
    if (findExisting) {
     let verifydata = await VerifyProfile.findOneAndUpdate(
       { UserId },
       {
         UserId,
         drivingLicensefront: licensefront,
         drivingLicenseback: licenseback,
         aadhaarCardfront: Adharfront,
         aadhaarCardback: Adharback,
         selfie: selfie,
       },
       { new: true }
      );
      console.log("verifyData", verifydata._id)
      const verifyObjectId=new mongoose.Types.ObjectId(verifydata._id)
        let updateData = await ProfileModel.findByIdAndUpdate(
          { _id: UserId },
          { VerifyId: verifydata._id },
          { new: true }
        );
     return res
        .status(201)
        .send({ msg: "documents has been updated", data: updateData });
    } else {
      const saveData = new VerifyProfile({
        UserId,
        drivingLicensefront: licensefront,
        drivingLicenseback: licenseback,
        aadhaarCardfront: Adharfront,
        aadhaarCardback: Adharback,
        selfie: selfie,
      });
      await saveData.save();
 let updateData = await ProfileModel.findByIdAndUpdate(
   { _id: UserId },
   { VerifyId: saveData._id },
   { new: true }
 );
     return res
        .status(201)
        .send({ msg: "Documents uploaded sucessfully", data: saveData });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "something went wrong", error });
  }
};

const AddMoneyInwallet = async (req, res) => {
  try {
    const { money, UserId } = req.body;
    const findUser = await ProfileModel.findOne({ _id: UserId, verify: true });
    if (findUser) {
      const uploadMoney = await ProfileModel.findOneAndUpdate(
        { _id: UserId },
        {
          Wallet: Number(findUser.wallet) + Number(money),
        },
        { new: true }
      );
      return res
        .status(201)
        .send({ msg: "Money is added in wallet", data: uploadMoney });
    } else {
     return res.status(404).send({ msg: "User does not exist or not verified" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "something went wrong", error });
  }
};

const VerifyUserProfile = async (req, res) => {
  try {
    const { money, UserId } = req.body;
    const findUser = await ProfileModel.findOne({ _id: UserId });
    if (findUser) {
      const VerifuUser = await ProfileModel.findOne(
        { _id: UserId },
        { verify: true }
      );
     return res.status(201).send({ msg: "User is verified now" });
    } else {
     return res.status(404).send({ msg: "User does not exist or not verified" });
    }
  } catch (error) {
    console.log(error);
   return res.status(500).send({ msg: "something went wrong", error });
  }
};
module.exports = {
  getUserProfile,
  updateLocation,
  updateUserProfile,
  verifyOtp,
  ResendOtp,
  UserLogin,
  UserRegister,
  forgetPassword,
  UploadDocuments,
  AddMoneyInwallet,
  VerifyUserProfile,
};
