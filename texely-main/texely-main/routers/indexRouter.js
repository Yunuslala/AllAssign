const express= require('express');
const router= express.Router();

var admin= require('./adminRouter/adminRoutes');
const static = require('./adminRouter/staticRoute');
var user=require('./userRouter/userRoutes');
router.use('/user',user);
router.use('/admin', admin);
router.use('/static', static )

module.exports= router;

