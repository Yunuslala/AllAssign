const { ProductMOdel } = require("../models/product.model");
const { body, validationResult } = require("express-validator");
const {upload,storage}=require("../utils/multer");
require('dotenv').config()
const multer = require("multer");
const ProductAdd = async (req, res) => {
  try {
    const { title, category, description, price } = req.body;
    const configPort=`http://localhost:${process.env.port}`;
    const fileUrl=req.file.path;
    const newUrl=fileUrl.split("\\");
    const configUpdatedFileUrl=`${configPort}/uploads/${newUrl.pop()}`;
    console.log(configUpdatedFileUrl)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    console.log({ title, category, description, price })
    const PostPrdoucts = new ProductMOdel({
      title,
      category,
      description,
      price,
      imageUrl:configUpdatedFileUrl
    });
    await PostPrdoucts.save();
    res.status(201).send({ msg: "Product has been added" });
  } catch (error) {
    console.log("error", error);
    res.status(500).send(error);
  }
};

const AllProducts = async (req, res) => {
  try {
    const GetProducts = await ProductMOdel.find({ availability: true })
      .populate("_id", "category")
      .exec();
    res.status(200).send(GetProducts);
  } catch (error) {
    console.log("error", error);
    res.status(500).send(error);
  }
};

const ProductsById = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    const { ProductId } = req.params;

    const GetByID = await ProductMOdel.find({
      _id: ProductId,
      availability: true,
    });
    if (GetByID.length) {
      return res.status(200).send(GetByID);
    } else {
      return res.status(404).send({ msg: "product is not available" });
    }
  } catch (error) {
    console.log("error", error);
    res.status(500).send(error);
  }
};

const RemoveProducts = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    const { ProductId } = req.params;
    const GetByID = await ProductMOdel.findByIdAndUpdate(
      { _id: ProductId },
      { availability: true }
    );
    res.status(201).send({ msg: "particular Product has been removed", GetByID });
  } catch (error) {
    console.log("error", error);
    res.status(500).send(error);
  }
};

const updateProducts = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    const { productId, userId, email, price, title, description, category } =
      req.body;
    if (price) {
      const GetByID = await ProductMOdel.findByIdAndUpdate(
        { _id: productId },
        { price }
      );

      console.log(GetByID);
    return  res.status(201).send({ msg: "particular Product has been updated", GetByID });
    } else if (title) {
      const GetByID = await ProductMOdel.findByIdAndUpdate(
        { _id: productId },
        { title }
      );

      console.log(GetByID);
     return res.status(201).send({ msg: "particular Product has been updated", GetByID });
    } else if (description) {
      const GetByID = await ProductMOdel.findByIdAndUpdate(
        { _id: productId },
        { description }
      );

      console.log(GetByID);
     return  res.status(201).send({ msg: "particular Product has been updated", GetByID });
    } else if (category) {
      const GetByID = await ProductMOdel.findByIdAndUpdate(
        { _id: productId },
        { category }
      );

      console.log(GetByID);
    return  res.status(201).send({ msg: "particular Product has been updated", GetByID });
    }
  } catch (error) {
    console.log("error", error);
    res.status(500).send(error);
  }
};

module.exports = {
  ProductAdd,
  ProductsById,
  AllProducts,
  RemoveProducts,
  updateProducts,
};
