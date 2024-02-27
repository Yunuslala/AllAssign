const express = require("express");
const CarBrandRouter = express.Router();

var multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dp3zu4yqa",
  api_key: "694519142328315",
  api_secret: "spuJHoH0WyKVfexxNpdNcakH1qc",
});
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "CarRental/images/CarBrand",
    allowed_formats: [
      "jpg",
      "avif",
      "webp",
      "jpeg",
      "png",
      "PNG",
      "xlsx",
      "xls",
      "pdf",
      "PDF",
    ],
  },
});
const upload = multer({ storage: storage });

const {
  deleteCarBrands,
  updateCarBrandsById,
  getCarBrandsById,
  getCarBrands,
  AddCarBrands,
} = require("../controller/Car.Brand.Controller");

CarBrandRouter.post("/add/carBrand", upload.single("image"), AddCarBrands);
CarBrandRouter.get("/get/carBrand", getCarBrands);
CarBrandRouter.get("/get/carBrand/:id", getCarBrandsById);
CarBrandRouter.patch(
  "/update/carBrand/:id",
  upload.single("image"),
  updateCarBrandsById
);
CarBrandRouter.delete("/delete/carBrand/:id", deleteCarBrands);

module.exports = {
  CarBrandRouter,
};
