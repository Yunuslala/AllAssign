const { UserMOdel } = require("../models/user.model");
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");

const jwt = require("jsonwebtoken");
const userSignup = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    const { name, email, password, role, mobileNumber } = req.body;
    const CheckAvailability = await UserMOdel.find({ email });
    console.log(CheckAvailability);
    if (CheckAvailability.length !== 0) {
      return res.status(200).send({ msg: "user already exist" });
    }
    bcrypt.hash(password, 6, async (err, hash) => {
      if (err) {
        return res.status(409).send({
          error: "Internal server error occurred during the hashing process.",
        });
      } else {
        const postUser = new UserMOdel({
          name,
          email,
          password: hash,
          role,
          mobileNumber,
        });
        await postUser.save();
        return res.status(201).send({ msg: "signup has been done" ,postUser});
      }
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).send(error);
  }
};

const userLogin = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    const { email, password } = req.body;
    let FindUser = await UserMOdel.find({ email });
    console.log(FindUser)
    if (!FindUser.length) {
      res.status(404).send({ msg: "You have not exist go for signup first" });
    } else if (FindUser[0].isBlocked) {
      return res.status(401).send({ msg: "You have been blocked" });
    } else {
      bcrypt.compare(FindUser[0].password, password, (err, result) => {
        if (err) {
          return res.status(422).send({ msg: "Invalid password" });
        } else {
          const token = jwt.sign(
            { userId: FindUser[0]._id, role: FindUser[0].role,email:FindUser[0].email },
            process.env.Secret,
            { expiresIn: "3h" }
          );
          res.status(201).send({ msg: "You logged in", token });
        }
      });
    }
  } catch (error) {
    console.log("error", error);
    res.status(500).send(error);
  }
};

module.exports = {
  userSignup,
  userLogin,
};
