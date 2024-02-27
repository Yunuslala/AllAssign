
const mongoose = require("mongoose");


const UserSchema = mongoose.Schema({
  Name: { type: String, },
  email: { type: String, unique: true },
  mobile: { type: String, unique: true },
  password: { type: String },
  location: {
    latitude: { type: String },
    longittude: { type: String },
  },
  image: { type: String },
  otp: { type: String },
  verifyOtp: { type: Boolean, default: false },
  expireTime:{type:String}
  
});

const ProfileModel = mongoose.model("Profile", UserSchema);

module.exports = {
  ProfileModel
}
