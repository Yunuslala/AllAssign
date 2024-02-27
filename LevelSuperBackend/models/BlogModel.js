const { DataTypes } = require('sequelize');
const { connection } = require('../config/db');


const BlogsModel = connection.define('BlogsModel', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

    Description: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    userId: {
        type: DataTypes.INTEGER,
    },
    isBlocked:{
        type:DataTypes.BOOLEAN,
        default:false
      }
});




module.exports = {BlogsModel};