const mongoose = require('mongoose');
const schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');
const DocumentSchema = schema({
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
    status: {
        type: String,
        enum: ["ACTIVE", "BLOCKED", "DELETE"],
        default: "ACTIVE"
    }
}, { timestamps: true })
DocumentSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("commission", DocumentSchema);
mongoose.model("commission", DocumentSchema).find({}, (err, result) => {
    if (err) {
        console.log("Default commission error", err);
    }
    else if (result.length != 0) {
        console.log("Default commission content");
    }
    else {
        let tax = 05;
        let Commission = 10;
        let totalCommission = tax + Commission;
        let driverCommission = 100 - totalCommission;
        var obj1 = {
            tax: tax,
            Commission: Commission,
            totalCommission: totalCommission,
            driverCommission: driverCommission,
        };
        mongoose.model("commission", DocumentSchema).create(obj1, (staticErr, staticResult) => {
            if (staticErr) {
                console.log("content commission error.", staticErr);
            }
            else {
                console.log("content commission created.", staticResult)
            }
        })
    }
})

