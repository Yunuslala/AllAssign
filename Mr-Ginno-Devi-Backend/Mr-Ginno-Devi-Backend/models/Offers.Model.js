const mongoose = require("mongoose");

const OfferSchema = mongoose.Schema(
  {
    title: { type: String },
    image: { type: String },
    desc: { type: String },
    discountAmount: { type: String },
    discountType: { type: String, enum: ["percent", "digit"] },
  },
  {
    timestamps: true,
  }
);

const OfferModel = mongoose.model("Offer", OfferSchema);
module.exports = {
  OfferModel,
};
