const mongoose = require("mongoose");

const FaqSchema = mongoose.Schema(
  {
    Question: { type: String },
    Answer: { type: String },
  },
  {
    timestamps: true,
  }
);

const FaqModel = mongoose.model("Faq", FaqSchema);
module.exports = {
  FaqModel,
};
