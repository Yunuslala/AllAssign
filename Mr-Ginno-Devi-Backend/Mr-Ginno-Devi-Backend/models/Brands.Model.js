const mongoose = require("mongoose");

const brandSchema = mongoose.Schema(
  {
    title: { type: String },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

const brandModel = mongoose.model("CarBrand", brandSchema);
module.exports = {
  brandModel,
};
