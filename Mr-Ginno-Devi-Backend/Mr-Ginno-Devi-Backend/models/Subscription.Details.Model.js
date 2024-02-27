const mongoose = require("mongoose");

const SubscriptionElegebilitySchema = mongoose.Schema(
  {
    Question: { type: String },
    Option1: { type: String },
    Option2: { type: String },
    Option3: { type: String },
    Option4: { type: String },
    QuestionType: { type: String },
  },
  {
    timestamps: true,
  }
);

const SubscriptionElegebilityModel = mongoose.model("SubscriptionElegebility", SubscriptionElegebilitySchema);
module.exports = {
  SubscriptionElegebilityModel,
};
