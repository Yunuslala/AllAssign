const express = require("express");
const OfferRouter = express.Router();

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
    folder: "CarRental/images/Offers",
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
  deleteOffer,
  updateOfferById,
  getOfferById,
  getOffers,
  AddOffer,
} = require("../controller/Offer.controller");

OfferRouter.post("/add", upload.single("image"), AddOffer);
OfferRouter.get("/get", getOffers);
OfferRouter.get("/get/:id", getOfferById);
OfferRouter.patch(
  "/update/:id",
  upload.single("image"),
  updateOfferById
);
OfferRouter.delete("/delete/:id", deleteOffer);

module.exports = {
  OfferRouter,
};
