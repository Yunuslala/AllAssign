const { DataTypes } = require('sequelize');
const { connection } = require('../config/db');

const Users = connection.define('Users', {

 name:{
    type:DataTypes.STRING,
    allowNull:false,
 },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique:true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    default: 'user', 
  },
  isBlocked:{
    type:DataTypes.BOOLEAN,
    default:false
  }
});

// Export the User model for use in other parts of the application
module.exports = {Users};