const express = require("express");
const CarRouter = express.Router();

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
    folder: "CarRental/images/Cars",
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
  deleteCar,
  updateCarById,
  getCarById,
  getCars,
  AddCar,
  UpdateParticularCarsImage,
  CarFilterPaginationSearch,
} = require("../controller/Car.Controller");

CarRouter.post("/add", upload.single("image"), AddCar);
CarRouter.get("/gets", getCars);
CarRouter.get("/gets/:id", getCarById);
CarRouter.patch(
  "/update/:id",
  upload.array("image"),
  updateCarById
);
CarRouter.patch(
  "/update/ParticularImage/:id",
  upload.single("image"),
  UpdateParticularCarsImage
);
CarRouter.delete("/delete/:id", deleteCar);
CarRouter.get("/Search/filter", CarFilterPaginationSearch);
module.exports = {
  CarRouter,
};
