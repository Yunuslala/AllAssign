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
    folder: "CarRental/images/Documents",
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


const VerifyUploads = upload.fields([
  { name: "frontlicense", maxCount: 1 },
  { name: "backlicense", maxCount: 1 },
  { name: "frontAdhar", maxCount: 1 },
  { name: "backAdhar", maxCount: 1 },
  { name: "Selfie", maxCount: 1 },
]);
const {
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
} = require("../controller/User.Profile.Cotroller");
const {AdminAuthorization}=require("../middlewares/authorization")
const {Authentication}=require("../middlewares/authentication")


ProfileRouter.post("/register",UserRegister)
ProfileRouter.post("/login",UserLogin);
ProfileRouter.get("/get/resend/Otp/:id",ResendOtp);
ProfileRouter.post("/verify/Otp/:id",verifyOtp);
ProfileRouter.patch("/Update/location", Authentication,updateLocation);
ProfileRouter.patch("/Update/User/Profile",Authentication, updateUserProfile);
ProfileRouter.post("/forget/Password",forgetPassword);
ProfileRouter.get("/get/profile",Authentication, getUserProfile);
ProfileRouter.post(
  "/upload/documents",
  VerifyUploads,
  Authentication,
  UploadDocuments
);
ProfileRouter.post("/verify/profile", AdminAuthorization, VerifyUserProfile);
ProfileRouter.post("/add/wallet",Authentication, AddMoneyInwallet);



module.exports = {
  ProfileRouter
}