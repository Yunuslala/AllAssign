const {AddressModel}=require("../models/AddressDetails.Model");
const CreateAddress=async(address)=>{
    try {
        const saveAddress=new AddressModel(address);
        await saveAddress.save();
        return saveAddress
    } catch (error) {
        console.log(error)
       return error
    }
}

module.exports={
    CreateAddress
}