const express = require("express");
const {
  ProductAdd,
  ProductsById,
  AllProducts,
  RemoveProducts,
  updateProducts,
} = require("../controllers/product.controller");
const ProductRoute = express.Router();
const { Authentication } = require("../middlewares/authentication");
const {
  VendorAuthorization,
  AdminAuthorization,
} = require("../middlewares/authorization");
const { body, validationResult, check } = require("express-validator");
const {upload}=require("../utils/multer")
ProductRoute.use(Authentication);

ProductRoute.post(
  "/post",
  upload.single("image"),
  [
    body("title").notEmpty().withMessage("title is required"),
    body("category").notEmpty().withMessage("category is required"),
    body("description").notEmpty().withMessage("description is required"),
    body("price").isInt().withMessage("price is required"),
  ],

  ProductAdd
);
ProductRoute.get("/get", AllProducts);
ProductRoute.get(
  "/get/:ProductId",
  check("ProductId")
    .exists()
    .withMessage("ProductId is required")
    .isString()
    .withMessage("ProductId must be a string"),
  ProductsById
);
ProductRoute.delete(
  "/delete/:ProductId",
  [
    check("ProductId")
      .exists()
      .withMessage("ProductId is required")
      .isString()
      .withMessage("ProductId must be a string"),
  ],
  VendorAuthorization,
  RemoveProducts
);
ProductRoute.patch(
  "/patch",
  [
    check("productId")
      .exists()
      .withMessage("ProductId is required")
      .isString()
      .withMessage("ProductId must be a string"),
  ],
  VendorAuthorization,
  updateProducts
);

module.exports = {
  ProductRoute,
};
