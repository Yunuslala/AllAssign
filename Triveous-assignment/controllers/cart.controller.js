const { CartModel } = require("../models/cart.model");
const { body, validationResult } = require("express-validator");




const AddToCart = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    console.log(req.body)
    const { productId, Userid } = req.body;
    console.log(productId,Userid)
    const ExistCartProduct = await CartModel.find({ userId:Userid,productId, status: "Added in cart" });
    if(ExistCartProduct.length){
      return res.status(204).send({"msg":"product already exist in your cart"})
    }
    const saveToCart = new CartModel({ productId, userId: Userid });
    await saveToCart.save();
    const CartProduct = await CartModel.find({ productId, status: "Added in cart" })
    .populate('productId', 'title price description availability') 
    .exec();
    console.log("cartproduct",CartProduct)
    res.status(201).send({ msg: "product has been added in cart",CartProduct });
  } catch (error) {
    console.log("error", error);
    res.status(500).send(error);
  }
};

const RemoveFromCart = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    const id = req.params.id;
    const removeFromCart = await CartModel.findByIdAndDelete({ _id: id });
    res.status(204).send({ msg: "product has been removed from cart" });
  } catch (error) {
    console.log("error", error);
    res.status(500).send(error);
  }
};

const UpdateCartProduct = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    const { id, quantity } = req.body;
    const UpdateCart = await CartModel.findByIdAndUpdate({ _id: id }, {quantity});
    res
      .status(204)
      .send({ msg: "product has been updated in cart", UpdateCart });
  } catch (error) {
    console.log("error", error);
    res.status(500).send(error);
  }
};

const GetCartProducts = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    const { Userid } = req.body;
    console.log(Userid)
    const AllCartProducts = await CartModel.find({ userId: Userid,
          status: "Added in cart"
        }) .populate('productId', 'title price description availability') 
        .populate('userId',"name email mobileNumber,role")
        .exec()
        const modifiedResponse = AllCartProducts.map((cartProduct) => {
          return {
            _id: cartProduct._id,
            productDetails: cartProduct.productId,
            userDetails: cartProduct.userId,
            status: cartProduct.status,
            isRemoved: cartProduct.isRemoved,
            quantity: cartProduct.quantity,
          };
        });
    res.status(200).send(modifiedResponse);
  } catch (error) {
    console.log("error", error);
    res.status(500).send(error);
  }
};

module.exports = {
  GetCartProducts,
  UpdateCartProduct,
  RemoveFromCart,
  AddToCart,
};
