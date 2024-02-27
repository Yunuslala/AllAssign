const mongoose = require("mongoose");

const CarsSchema = mongoose.Schema({
  title: { type: String },
  images: [{ image: { type: String } }],
  name: { type: String },
  desc: { type: String },
  rent: {
    amount: { type: String },
    type: { type: String, enum: ["monthly", "weekly", "daily", "yearly","hourly"] },
  },
  reviews: [
    {
      userId: { type: String },
      comments: { type: String },
    },
  ],
  rating: [
    {
      userId: { type: String },
      rating: { type: Number, default: 0 },
    },
  ],
  city: { type: String },
  CarInfo: {
    Passengers: { type: String },
    AirConditioning: { type: Boolean },
    AutoMatic: { type: Boolean },
    Doors: { type: String },
  },
  categoryId: { type: String },
  SubcategoryId: { type: String },
  TypeCategoryId: { type: String },
  AvailaibiltyInfo: {
    available: { type: Boolean },
    
  },
  AvailabilityType: {type:String,enum:["rental","subscription","sharing"]}

});

const CarsModel = mongoose.model("Car", CarsSchema);
module.exports = {
  CarsModel,
};
