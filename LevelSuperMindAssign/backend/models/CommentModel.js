const { DataTypes } = require('sequelize');
const { connection } = require('../config/db');


const CommentModel = connection.define('CommentsModel', {
    comments: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    userId: {
        type: DataTypes.INTEGER,
    },
    blogsId: {
        type: DataTypes.INTEGER,
    },
    isAvailable:{
        type:DataTypes.BOOLEAN,
        default:true
    },
    isBlocked:{
        type:DataTypes.BOOLEAN,
        default:false
    }
});



module.exports = { CommentModel};