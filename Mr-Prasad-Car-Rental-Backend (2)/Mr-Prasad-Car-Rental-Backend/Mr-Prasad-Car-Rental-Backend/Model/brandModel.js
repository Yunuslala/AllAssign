const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 50
  },
  brandimage: {
    type:String,
  }
})


const brandModel = mongoose.model("Brand", brandSchema)


module.exports = brandModel;