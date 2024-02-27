const {sendReport,sentHistory}=require("../controller/report.controller");
const express=require("express");
const ReportRouter=express.Router();
const {Authentication}=require("../middlewares/authentication")

ReportRouter.post('/send-report',Authentication,sendReport);
ReportRouter.get('/get-history',Authentication,sentHistory);

module.exports={
    ReportRouter
};
