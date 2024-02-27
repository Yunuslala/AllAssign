const { CategoryModel } = require("../models/Category.Model");


const AddCategory = async (req, res) => {
  try {
   
    let image;
    let { title } = req.body;
    if (req.file) {
       console.log("req.body", req.file);
      image=req.file.path
    }
    title = title.toLocaleLowerCase();
    let findExisting = await CategoryModel.findOne({ title });
    if (findExisting) {
     return res.status(200).send({"msg":"Category already exist"})
    }
    else {
      const saveCategory = new CategoryModel({ image, title });
      await saveCategory.save();
     return res.status(201).send({"msg":"category is added",data:saveCategory})
    }
      
  } catch (error) {
    console.log(error);
   return res.status(500).send({"msg":"something went wrong",error})
  }
}


const getCategories = async (req, res) => {
  try {
    const data = await CategoryModel.find();
   if (data) {
    return res.status(200).send(data);
   } else {
    return res.status(404).send({ msg: "Category does not exist" });
   }
  } catch (error) {
    console.log(error);
   return res.status(500).send({ msg: "something went wrong", error });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await CategoryModel.findOne({ _id: id });
    if (data) {
     return res.status(200).send(data);
    } else {
     return res.status(404).send({"msg":"Category does not exist"})
    }
    
  } catch (error) {
    console.log(error);
   return res.status(500).send({ msg: "something went wrong", error });
  }
};

const updateCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await CategoryModel.findOne({ _id: id });
    let  { title } = req.body;
    let image;
    if (req.file) {
      image=req.file.path
    } else {
      image=data.image
    }
    if (data) {
      if (title == "" || !title) {
        title=data.title
      }
      console.log("data",title,image)
      const updateddata = await CategoryModel.findByIdAndUpdate(
        { _id: id },
        { image, title },
        { new: true }
      );

     return res.status(201).send({ msg: "category is updated", data: updateddata });
    }
    else {
     return res.status(404).send({"msg":"category is not exist"})
    }

  } catch (error) {
    console.log(error);
   return res.status(500).send({ msg: "something went wrong", error });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const findUser = await CategoryModel.findByIdAndDelete({ _id: id });
    console.log(findUser)
   return res.status(204).send({ "msg": "category has been deleted" });
  } catch (error) {
    console.log(error);
   return res.status(500).send({ msg: "something went wrong", error });
  }
};

module.exports = {
  deleteCategory,
  updateCategoryById,
  getCategoryById,
  getCategories,
  AddCategory,
};