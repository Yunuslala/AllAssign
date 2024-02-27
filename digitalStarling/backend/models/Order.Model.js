const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  CartId: {type:String,ref:"Cart"},
  UserID: String
});

const OrderModel = mongoose.model("Order", OrderSchema);

module.exports = {
  OrderModel,
};
