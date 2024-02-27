const mongoose = require("mongoose");
const schema = mongoose.Schema;
const mongoosePaginate = require("mongoose-paginate");

var audioModel = new schema(
    {
        audioName: {
            type: String
        },
        audio: {
            type: String
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
audioModel.plugin(mongoosePaginate);
module.exports = mongoose.model("audio", audioModel);
