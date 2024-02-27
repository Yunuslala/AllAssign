const { CarSubCategoryModel } = require("../models/Car.subCategory.model");

const AddCarSubCategory = async (req, res) => {
  try {
    let { title } = req.body;
    title = title.toLocaleLowerCase();
    let findExisting = await CarSubCategoryModel.findOne({ title });
    if (findExisting) {
      res.status(200).send({ msg: "Category already exist" });
    } else {
      const saveCategory = new CarSubCategoryModel({  title });
      await saveCategory.save();
      res.status(201).send({ msg: "category is added", data: saveCategory });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "something went wrong", error });
  }
};

const getCarSubCategories = async (req, res) => {
  try {
    const data = await CarSubCategoryModel.find();
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(404).send({ msg: "Category does not exist" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "something went wrong", error });
  }
};

const getCarSubCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await CarSubCategoryModel.findOne({ _id: id });
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(404).send({ msg: "Category does not exist" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "something went wrong", error });
  }
};

const updateCarSubCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await CarSubCategoryModel.findOne({ _id: id });
    let { title } = req.body;
    if (data) {
      if (title == "" || !title) {
        title = data.title;
      }
      console.log("data", title, image);
      await CarSubCategoryModel.findByIdAndUpdate(
        { _id: id },
        { image, title }
      );
      const updateddata = await CarSubCategoryModel.findOne({ _id: id });
      console.log(updateddata, "updatedData");
      res.status(201).send({ msg: "category is updated", data: updateddata });
    } else {
      res.status(404).send({ msg: "category is not exist" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "something went wrong", error });
  }
};

const deleteCarSubCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const findUser = await CarSubCategoryModel.findByIdAndDelete({ _id: id });
    console.log(findUser);
    res.status(204).send({ msg: "category has been deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "something went wrong", error });
  }
};

module.exports = {
  AddCarSubCategory,
  getCarSubCategories,
  getCarSubCategoryById,
  updateCarSubCategoryById,
  deleteCarSubCategory,
};