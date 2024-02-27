const mongoose=require("mongoose");

const reportSchema=mongoose.Schema({
    isSent:Boolean,
    sent_to:String,
    userId:String
})


const ReportModel=mongoose.model("report",reportSchema);
module.exports={
    ReportModel
}