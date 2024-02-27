const cron=require("node-cron");
const {ProductMOdel}=require("../models/product.model");


let PreviouUpdatedProductId=null

let updationJob;


const createProductAuthorize = () => {
    console.log("nested")
 
};

const startUpdationJob=async()=>{
    let query={};

    if(PreviouUpdatedProductId){
        query={_id:{$ne:PreviouUpdatedProductId},isAuthorize:false}
    }else{
        query={
            isAuthorize:false
        }
    }
    const updatedProduct=await ProductMOdel.findOne(query);
    console.log("beforeupdation",updatedProduct)
    if(updatedProduct){
        updatedProduct.isAuthorize=true;
        await updatedProduct.save();
        console.log("product",updatedProduct)
        PreviouUpdatedProductId=updatedProduct._id
        console.log("product has been authorized")
    }
    else{
        setTimeout(() => {
            console.log('Task completed.'); 
            updationJob.stop()
          }, 0);
    }
}

let runOnce=false;
const Authorizejob = cron.schedule(' */5 * * * *', () => {
    console.log("job is running");
    updationJob = cron.schedule(' */1 * * * 1-5', () => {
        console.log("updation will start");
        startUpdationJob()
    });
    setTimeout(() => {
        console.log("stop job");
        Authorizejob.stop();
    },1000*60*5);
});

module.exports={
    Authorizejob
}