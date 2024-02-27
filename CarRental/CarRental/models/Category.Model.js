const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
  title: { type: String },
  image:{type:String}
})


const CategoryModel = mongoose.model("Categori", CategorySchema);
module.exports = {
  CategoryModel
}