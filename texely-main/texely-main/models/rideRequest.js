const mongoose = require('mongoose');
const schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');
const mongooseAggregatePaginate = require('mongoose-aggregate-paginate');
const DocumentSchema = schema({
    userId: {
        type: schema.Types.ObjectId,
        ref: "user"
    },
    dateTime: {
        type: String
    },
    vehicalType: {
        type: mongoose.Schema.ObjectId,
        ref: 'vehical'
    },
    description: {
        type: String
    },
    drivers: [{
        type: schema.Types.ObjectId,
        ref: "user"
    }],
    startLocation: {
        type: String
    },
    endLocation: {
        type: String
    },
    currentLocation: {
        type: {
            type: String,
            default: "Point"
        },
        coordinates: {
            type: [Number],
            default: [0, 0]
        },
    },
    destinationLocation: {
        type: {
            type: String,
            default: "Point"
        },
        coordinates: {
            type: [Number],
            default: [0, 0]
        },
    },
    auctionStaus: {
        type: String,
        enum: ["START", "CLOSE", "CANCEL"],
        default: "START"
    },
    status: {
        type: String,
        enum: ["ACTIVE", "BLOCKED", "DELETE"],
        default: "ACTIVE"
    }
}, { timestamps: true })
DocumentSchema.plugin(mongoosePaginate);
DocumentSchema.plugin(mongooseAggregatePaginate);
module.exports = mongoose.model("rideRequest", DocumentSchema);

