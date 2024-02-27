const mongoose = require('mongoose');
const schema = mongoose.Schema;
const chatSchema = new schema({
    driverId: {
        type: mongoose.Schema.ObjectId,
        ref:'user'
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref:'user'
    },
    rideId:{  
        type: mongoose.Schema.ObjectId,
        ref:'rideRequest'
    },
    bidStatus: {
        type: String,
        enum: ["ACCEPTED", "REJECTED", "PENDING", ""]
    },
    commentHistory: [{
        userId: {
            type: schema.Types.ObjectId,
            ref: "user"
        },
        comment: {
            type: String
        },
        commentType: {
            type: String,
            enum: ["COMMENT", "PRICE"],
        },
        bidStatus: {
            type: String,
            enum: ["ACCEPTED", "REJECTED", "PENDING", ""]
        },
    }],
    auctionStaus: {
        type: String,
        enum: ["START", "CLOSE"],
        default: "START"
    },
    status: {
        type: String,
        enum: ["ACTIVE", "BLOCK", "DELETE"],
        default: "ACTIVE"
    }

}, {
    timestamps: true
})
module.exports = mongoose.model("rideChat", chatSchema)
