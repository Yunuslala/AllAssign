const express = require("express");
const ProfileRouter = express.Router();
var multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "dp3zu4yqa",
  api_key: "694519142328315",
  api_secret: "spuJHoH0WyKVfexxNpdNcakH1qc",
});
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "CarRental/images/Profiles",
    allowed_formats: [
      "jpg",
      "avif",
      "webp",
      "jpeg",
      "png",
      "PNG",
      "xlsx",
      "xls",
      "pdf",
      "PDF",
    ],
  },
});
const upload = multer({ storage: storage });

const {
  getUserProfile,
  forgetPassword,updateLocation,
  updateUserProfile,
  verifyOtp,
  ResendOtp,
  UserLogin,
  UserRegister,
} = require("../controller/User.Profile.Cotroller");

ProfileRouter.post("/register",UserRegister)
ProfileRouter.post("/login",UserLogin);

ProfileRouter.get("/get/resend/Otp/:id",ResendOtp);
ProfileRouter.post("/verify/Otp/:id",verifyOtp);
ProfileRouter.post("/Update/location/:id",updateLocation);
ProfileRouter.post(
  "/Update/Profile",
  upload.single("profile"),
  updateUserProfile
);
ProfileRouter.post("/forget/Password",forgetPassword);
ProfileRouter.post("/get/profile", getUserProfile);


module.exports = {
  ProfileRouter
}