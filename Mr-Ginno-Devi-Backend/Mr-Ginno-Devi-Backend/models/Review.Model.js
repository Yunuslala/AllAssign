const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema(
  {
    Comments: { type: String },
    rating: { type: Number, default: 0 },
    CarId: { type: mongoose.Types.ObjectId, ref: "Car" },
    UserID: { type: mongoose.Types.ObjectId, ref: "Profile" },
  },
  {
    timestamps: true,
  }
);

const ReviewModel = mongoose.model(
  "Review",
  ReviewSchema
);
module.exports = {
  ReviewModel,
};
