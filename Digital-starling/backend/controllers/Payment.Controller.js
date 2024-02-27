const {PaymentDetailsModel}=require("../models/PaymentDetails.Model");
const CreatePaymentDetails=async(PaymentDetails)=>{
    try {
        const SavePaymentDetails=new PaymentDetailsModel(PaymentDetails);
        await SavePaymentDetails.save();
        return SavePaymentDetails
    } catch (error) {
        console.log(error)
       return error
    }
}

module.exports={
    CreatePaymentDetails
}