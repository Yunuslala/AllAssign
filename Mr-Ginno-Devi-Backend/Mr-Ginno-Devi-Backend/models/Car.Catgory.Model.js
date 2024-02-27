const mongoose = require("mongoose");

const CarCategorySchema = mongoose.Schema(
  {
    title: { type: String },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

const CarCategoryModel = mongoose.model("CarCategori", CarCategorySchema);
module.exports = {
  CarCategoryModel,
};
