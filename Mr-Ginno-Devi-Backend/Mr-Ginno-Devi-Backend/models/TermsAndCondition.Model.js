const mongoose = require("mongoose");

const TermsAndConditonSchema = mongoose.Schema(
  {
    description: { type: String },
    Type: { type: String, enum: ["Cancel", "policy", "Agreement", "Return"] },
  },
  {
    timestamps: true,
  }
);

const TermsAndConditonModel = mongoose.model("TermsAndConditon", TermsAndConditonSchema);
module.exports = {
  TermsAndConditonModel,
};
