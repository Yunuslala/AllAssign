const mongoose = require("mongoose");

const OfferSchema = mongoose.Schema({
  title: { type: String },
  image: { type: String },
  desc: { type: String },
  discount: {
    amount: { type: String },
    type: { type: String, enum: ["percent", "digit"] },
  },
});

const OfferModel = mongoose.model("Offer", OfferSchema);
module.exports = {
  OfferModel,
};
