
const mongoose = require("mongoose");


const UserSchema = mongoose.Schema(
  {
    Name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    password: { type: String, required: true },
    location: {
      latitude: { type: String },
      longittude: { type: String },
    },
    otp: { type: String },
    verifyOtp: { type: Boolean, default: false },
    expireTime: { type: String },
    role: { type: String, enum: ["admin", "user", "host"], default: "user" },
    Wallet: { type: Number, default: 0 },
    VerifyId: { type: mongoose.Types.ObjectId, ref: "VerifyDocument" },
    Verify: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const ProfileModel = mongoose.model("Profile", UserSchema);

module.exports = {
  ProfileModel
}
