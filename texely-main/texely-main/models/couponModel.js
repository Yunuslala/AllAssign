const mongoose = require('mongoose');
const schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');
const DocumentSchema = schema({
    couponName: {
        type: String
    },
    code: {
        type: String
    },
    description: {
        type: String
    },
    amount: {
        type: Number
    },
    expireDate: {
        type: String
    },
    isActive: {
        type: Boolean,
        default: true
    },
}, { timestamps: true })

DocumentSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("coupon", DocumentSchema);