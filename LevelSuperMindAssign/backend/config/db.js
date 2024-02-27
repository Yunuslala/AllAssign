const Sequelize = require('sequelize');
require('dotenv').config()


const connection = new Sequelize("my-aws-db", "admin", "Ritesh2124", {
    'host': "database-1.ciqy5uma0pzg.ap-south-1.rds.amazonaws.com",
    'dialect': 'mysql'
})



  module.exports={
    connection
  }