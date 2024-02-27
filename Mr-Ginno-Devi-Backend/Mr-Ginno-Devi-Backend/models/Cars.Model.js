const mongoose = require("mongoose");

const CarsSchema = mongoose.Schema(
  {
    title: { type: String },
    images: [{ image: { type: String } }],
    name: { type: String },
    desc: { type: String },
    RentAmount: { type: Number },
    CarAge: { type: Number },
    RentType: {
      type: String,
      enum: ["monthly", "weekly", "daily", "yearly", "hourly"],
    },
    reviews: [{ reviewId: { type: mongoose.Types.ObjectId, ref: "Review" } }],
    city: { type: String },
    Passengers: { type: String },
    AirConditioning: { type: Boolean },
    Transmission: { type: String, enum: ["Automaitc", "Manual"] },
    FuelType: { type: String, enum: ["Disel", "Petrol", "Cng", "Electric"] },
    Doors: { type: String },
    DrivenKm: { type: Number },
    AvgSpeed: { type: String },
    Hp: { type: String },
    AirBag: { type: Boolean },
    Milage: { type: String },
    deliveryType: { type: String },
    ExtraFeatures: [{ feature: { type: String } }],
    BrandId: { type: mongoose.Types.ObjectId, ref: "CarBrand" },
    AverageRating: { type: Number, default: 0 },
    SubcategoryId: { type: String },
    TypeCategoryId: { type: mongoose.Types.ObjectId, ref: "CarCategori" },
    available: { type: Boolean, default: true },
    from: { type: String },
    to: { type: String },
    CarType: {
      type: String,
      enum: ["rental", "subscription", "sharing"],
    },
    SubscriptionId: { type: mongoose.Types.ObjectId, ref: "Subscription" },
    CarAdditonalCharges: {
      type: mongoose.Types.ObjectId,
      ref: "AdditonalCharge",
    },
  },
  {
    timestamps: true,
  }
);

const CarsModel = mongoose.model("Car", CarsSchema);
module.exports = {
  CarsModel,
};
