const mongoose = require('mongoose');
const schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');
const DocumentSchema = schema({
    userId: {
        type: schema.Types.ObjectId,
        ref: "user"
    },
    userName: {
        type: String
    },
    aadharNo: {
        type: String
    },
    frontImage: {
        type: String
    },
    backImage: {
        type: String
    },
    status: {
        type: String,
        enum: ["ACTIVE", "BLOCKED", "DELETE"],
        default: "ACTIVE"
    }
}, { timestamps: true })
DocumentSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("aadharDocument", DocumentSchema);

