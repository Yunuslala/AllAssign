const { FaqModel } = require("../models/Faq.Model");

const AddFaq = async (req, res) => {
  try {
    let { Question, Answer} = req.body;

    title = title.toLocaleLowerCase();
   
      const saveFaq = new FaqModel({
        Question,
        Answer,
      });
      await saveFaq.save();
     return res.status(201).send({ msg: "faq is added", data: saveFaq });
 
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "something went wrong", error });
  }
};

const getFaqs = async (req, res) => {
  try {
    const data = await FaqModel.find();
    if (data) {
     return res.status(200).send(data);
    } else {
     return res.status(404).send({ msg: "Faq does not exist" });
    }
  } catch (error) {
    console.log(error);
   return res.status(500).send({ msg: "something went wrong", error });
  }
};

const getFaqById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await FaqModel.findOne({ _id: id });
    if (data) {
     return res.status(200).send(data);
    } else {
     return res.status(404).send({ msg: "Faq does not exist" });
    }
  } catch (error) {
    console.log(error);
   return res.status(500).send({ msg: "something went wrong", error });
  }
};

const updateFaqById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await FaqModel.findOne({ _id: id });
    let { Question, Answer } = req.body;
    if (data) {
      if (Question == "" || !Question) {
        Question = data.Question;
      }
      if (Answer == "" || !Answer) {
        Answer = data.Answer;
      }
      await FaqModel.findByIdAndUpdate(
        { _id: id },
        {
          Question,
          Answer,
        },{new:true}
      );
     return res.status(201).send({ msg: "faq is updated", data: updateddata });
    } else {
     return res.status(404).send({ msg: "faq is not exist" });
    }

  } catch (error) {
    console.log(error);
   return res.status(500).send({ msg: "something went wrong", error });
  }
};

const deleteFaq = async (req, res) => {
  try {
    const { id } = req.params;
    const findUser = await FaqModel.findByIdAndDelete({ _id: id });
    console.log(findUser);
   return res.status(204).send({ msg: "faq has been deleted" });
  } catch (error) {
    console.log(error);
   return res.status(500).send({ msg: "something went wrong", error });
  }
};

module.exports = {
  deleteFaq,
  updateFaqById,
  getFaqById,
  getFaqs,
  AddFaq,
};
