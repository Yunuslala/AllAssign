const mongoose = require("mongoose");

const ServiceFedbackSchema = mongoose.Schema(
  {
    Comments: { type: String },
    rating: { type: Number, default: 0 },
    UserID: { type: mongoose.Types.ObjectId, ref: "Profile" },
  },
  {
    timestamps: true,
  }
);

const ServiceFedbackModel = mongoose.model("ServiceFedback", ServiceFedbackSchema);
module.exports = {
  ServiceFedbackModel,
};
