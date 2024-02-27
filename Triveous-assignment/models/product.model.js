const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  availability: { type: Boolean, default: true },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  imageUrl:{
    type:String,
  },
  isAuthorize:{
    type:Boolean,
    default:false
  }

});
ProductSchema.index({ category: 1 });
const ProductMOdel = mongoose.model("products",ProductSchema );
module.exports = {
    ProductMOdel,
};
