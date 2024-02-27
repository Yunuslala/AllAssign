const { CarCategoryModel } = require("../models/Car.Catgory.Model");



const AddCategory = async (req, res) => {
  try {
    let image;
    let { title } = req.body;
    if (req.file) {
      console.log("req.body", req.file);
      image = req.file.path;
    }
    title = title.toLocaleLowerCase();
    let findExisting = await CarCategoryModel.findOne({ title });
    if (findExisting) {
      res.status(200).send({ msg: "Category already exist" });
    } else {
      const saveCategory = new CarCategoryModel({ image, title });
      await saveCategory.save();
      res.status(201).send({ msg: "category is added", data: saveCategory });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "something went wrong", error });
  }
};

const getCategories = async (req, res) => {
  try {
    const data = await CarCategoryModel.find();
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

const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await CarCategoryModel.findOne({ _id: id });
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

const updateCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await CarCategoryModel.findOne({ _id: id });
    let { title } = req.body;
    let image;
    if (req.file) {
      image = req.file.path;
    } else {
      image = data.image;
    }
    if (data) {
      if (title == "" || !title) {
        title = data.title;
      }
      console.log("data", title, image);
      await CarCategoryModel.findByIdAndUpdate({ _id: id }, { image, title });
      const updateddata = await CarCategoryModel.findOne({ _id: id });
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

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const findUser = await CarCategoryModel.findByIdAndDelete({ _id: id });
    console.log(findUser);
    res.status(204).send({ msg: "category has been deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "something went wrong", error });
  }
};

module.exports = {
  deleteCategory,
  updateCategoryById,
  getCategoryById,
  getCategories,
  AddCategory,
};