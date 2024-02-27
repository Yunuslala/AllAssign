const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const VerifyProfileSchema = new mongoose.Schema({
  UserId: {
    type: ObjectId,
    ref: "Profile",
  },
  drivingLicensefront: { type: String, required: true },
  drivingLicenseback: { type: String, required: true },
  aadhaarCardfront: { type: String, required: true },
  aadhaarCardback: { type: String, required: true },
  selfie: { type: String, required: true },
});

const VerifyProfile = mongoose.model("VerifyDocument", VerifyProfileSchema);

module.exports = {
  VerifyProfile,
};
