const mongoose = require('mongoose');
const schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');
const DocumentSchema = schema({
    userId: {
        type: schema.Types.ObjectId,
        ref: "user"
    },
    drivers: {
        type: schema.Types.ObjectId,
        ref: "user"
    },
    rideId: {
        type: mongoose.Schema.ObjectId,
        ref: 'rideRequest'
    },
    bookingId: {
        type: String
    },
    dateTime: {
        type: String
    },
    amount: {
        type: Number
    },
    vehicalType: {
        type: mongoose.Schema.ObjectId,
        ref: 'vehical'
    },
    description: {
        type: String
    },
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
    bookingStatus: {
        type: String,
        enum: ["START", "STOP", "PENDING", "CANCEL"],
        default: "PENDING"
    },
    paymentMode: {
        type: String,
        enum: ["CASH", "WALLET"],
    },
    paymentStatus: {
        type: String,
        enum: ["PENDING", "SUCCESS", "FAILED"],
        default: "PENDING"
    },
    status: {
        type: String,
        enum: ["ACTIVE", "BLOCKED", "DELETE"],
        default: "ACTIVE"
    }
}, { timestamps: true })
DocumentSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("booking", DocumentSchema);

