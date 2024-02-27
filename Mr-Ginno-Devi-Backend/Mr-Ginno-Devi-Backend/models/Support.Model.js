const mongoose = require("mongoose");

const SupportSchema = mongoose.Schema(
  {
    number: { type: String },
    Email: { type: String },
  },
  {
    timestamps: true,
  }
);

const SupportModel = mongoose.model("Support", SupportSchema);
module.exports = {
  SupportModel,
};
