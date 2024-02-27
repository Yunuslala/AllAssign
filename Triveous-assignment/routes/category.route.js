const express=require("express");
const categoryRoute=express.Router();
const {AddCategory,AllCategories}=require("../controllers/category.controller")
const {VendorAuthorization}=require("../middlewares/authorization");
const {Authentication}=require("../middlewares/authentication");
const { body, validationResult } = require("express-validator");

categoryRoute.use(Authentication);

categoryRoute.post('/Add',
body('category').notEmpty().withMessage('category is required'),
VendorAuthorization,
AddCategory);

categoryRoute.get('/get',AllCategories);






module.exports={
    categoryRoute
}