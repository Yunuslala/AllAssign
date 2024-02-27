const { ReviewModel } = require("../models/Review.Model");
const { CarsModel } = require("../models/Cars.Model");


const AddReview = async (req, res) => {
  try {
    const CarId = req.params.id;
    let { Comments, rating, UserId } = req.body;
    const saveReview = new ReviewModel({
      Comments,
      rating,
      UserID: UserId,
      CarId
    });
    
    await saveReview.save();
    const avgReview =await ReviewModel.aggregate([
      {
        $match: { CarId: mongoose.Types.ObjectId(CarId) },
      },
      {
        $group: {
          _id: "$CarId",
          averageRating: { $avg: "$rating" },
        },
      },
    ]);
    let AvgRating = avgReview[0].averageRating;

    await CarsModel.findByIdAndUpdate(
      { _id: CarId },
      {
        $push: {
          reviews: { reviewId: saveReview._id },
        },
        $set: { AverageRating: AvgRating },
      },
      {new:true}
    );
   return res
      .status(201)
      .send({ msg: "review is added", data: saveReview });
  } catch (error) {
    console.log(error);
   return res.status(500).send({ msg: "something went wrong", error });
  }
};

const getReviewOfCars = async (req, res) => {
  try {
     const CarId = req.params.id;
    const data = await ReviewModel.find({CarId});
    if (data) {
     return res.status(200).send(data);
    } else {
     return res.status(404).send({ msg: "Review does not exist" });
    }
  } catch (error) {
    console.log(error);
   return res.status(500).send({ msg: "something went wrong", error });
  }
};

const getReviewSOfUserById = async (req, res) => {
  try {
    const { UserId } = req.body;
    const data = await ReviewModel.findOne({ UserID: UserId });
    if (data) {
     return res.status(200).send(data);
    } else {
     return res.status(404).send({ msg: "Review does not exist" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "something went wrong", error });
  }
};

const updateReviewById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await ReviewModel.findOne({ _id: id });
    let { title, amount, amountType, RentTenure, descFirst, decSecond } =
      req.body;
    if (data) {
      if (title == "" || !title) {
        title = data.title;
      }
      if (amount == "" || !amount) {
        amount = data.amount;
      }
      if (amountType == "" || !amountType) {
        amountType = data.amountType;
      }
      if (RentTenure == "" || !RentTenure) {
        RentTenure = data.RentTenure;
      }
      if (descFirst == "" || !descFirst) {
        descFirst = data.descFirst;
      }
      if (decSecond == "" || !decSecond) {
        decSecond = data.decSecond;
      }

      const updateddata=await ReviewModel.findByIdAndUpdate(
        { _id: id },
        { title, amount, amountType, RentTenure, descFirst, decSecond },{new:true}
      );
     return res
        .status(201)
        .send({ msg: "review is updated", data: updateddata });
    } else {
     return res.status(404).send({ msg: "review is not exist" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "something went wrong", error });
  }
};

const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    const findUser = await ReviewModel.findByIdAndDelete({ _id: id });
    console.log(findUser);
   return res.status(204).send({ msg: "review has been deleted" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "something went wrong", error });
  }
};


module.exports = {
  deleteReview,
  updateReviewById,
  getReviewSOfUserById,
  getReviewOfCars,
  AddReview,
};
