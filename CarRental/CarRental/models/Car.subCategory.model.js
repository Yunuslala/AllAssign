const mongoose = require("mongoose");

const CarSubCategorySchema = mongoose.Schema({
  title: { type: String },
 
});

const CarSubCategoryModel = mongoose.model("CarSubCategori", CarSubCategorySchema);
module.exports = {
  CarSubCategoryModel,
};
