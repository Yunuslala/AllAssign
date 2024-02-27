const mongoose = require("mongoose");

const CartSchema = mongoose.Schema({
  products: [
    {
      productId: { type: String, ref: "Product" },
      quantity: { type: Number, default: 1 },
    },
  ],
  UserID: String,
});

const CartModel = mongoose.model("Cart", CartSchema);

module.exports = {
  CartModel,
};
