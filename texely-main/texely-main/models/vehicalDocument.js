const mongoose = require('mongoose');
const schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');
const DocumentSchema=schema({
    userId:{
        type: schema.Types.ObjectId,
        ref: "user"
    },
    vehicalType: {
        type: mongoose.Schema.ObjectId,
        ref: 'vehical'
    },
    numberPlate:{
        type:String
    },
    vehicalRc:{
        type:String
    },
    drivingLicence:{
        type:String
    },
    vehicleInsurance :{
        type:String
    },
    verified:{
        type: String,
        enum: ["APPROVE", "PENDING", "REJECT"],
        default: "PENDING"
    },
    status: {
        type: String,
        enum: ["ACTIVE", "BLOCKED", "DELETE"],
        default: "ACTIVE"
    }
},{ timestamps: true })
DocumentSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("vehicalDocument", DocumentSchema);

