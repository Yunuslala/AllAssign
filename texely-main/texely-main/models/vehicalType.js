const mongoose = require("mongoose");
const schema = mongoose.Schema;
const mongoosePaginate = require("mongoose-paginate");

var vehicalModel = new schema(
    {
        vehicalName: {
            type: String
        },
        vehicalImage: {
            type: String
        },
        tax: {
            type: Number
        },
        Commission: {
            type: Number
        },
        totalCommission: {
            type: Number
        },
        driverCommission: {
            type:Number
        },
        disCountType: {
            type: String,
            enum: ["FLAT", "PERCENTAGE"]
        },    
        status: {
            type: String,
            enum: ["ACTIVE", "DELETE", "BLOCK"],
            default: "ACTIVE"
        }
    },
    {
        timestamps: true
    }
);
vehicalModel.plugin(mongoosePaginate);
module.exports = mongoose.model("vehical", vehicalModel);
