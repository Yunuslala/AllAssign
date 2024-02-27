const express = require("express");
const CategoryRouter = express.Router();

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
    folder: "CarRental/images/Categories",
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
  deleteCategory,
  updateCategoryById,
  getCategoryById,
  getCategories,
  AddCategory,
} = require("../controller/Category.Controller");


CategoryRouter.post("/add",upload.single("image"), AddCategory);
CategoryRouter.get("/get", getCategories);
CategoryRouter.get("/get/:id", getCategoryById);
CategoryRouter.patch("/update/:id",upload.single("image"), updateCategoryById);
CategoryRouter.delete("/delete/:id", deleteCategory);

module.exports = {
  CategoryRouter
}