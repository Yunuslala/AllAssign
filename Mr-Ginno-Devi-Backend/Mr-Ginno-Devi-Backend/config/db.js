const mongoose = require("mongoose");
require('dotenv').config()
const connection = mongoose.connect(
  "mongodb+srv://react2:react2@cluster0.8ws6i1q.mongodb.net/?retryWrites=true&w=majority"
);


module.exports = {
  connection
}