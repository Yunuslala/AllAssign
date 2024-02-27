const mongoose = require('mongoose');
const schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');
let mongooseAggregatePaginate = require('mongoose-aggregate-paginate');
var bcrypt = require('bcryptjs');
var userSchema = new schema({
    name: {
        type: String
    },
    country: {
        type: String
    },
    city: {
        type: String
    },
    address: {
        type: String
    },
    walletBalance: {
        type: Number,
        default: 0,
    },
    countryCode: {
        type: String
    },
    mobileNumber: {
        type: String
    },
    password: {
        type: String
    },
    profilePic: {
        type: String,
        default: null
    },
    otp: {
        type: String
    },
    otpTimeExpire: {
        type: Number,
    },
    completeProfile: {
        type: Boolean,
        default: false
    },
    accountVerify: {
        type: Boolean,
        default: false
    },
    notification: {
        type: Boolean,
        default: true
    },
    bioText: {
        type: String,
        default: "",
    },
    documentId: [{
        type: schema.Types.ObjectId,
        ref: "vehicalDocument"
    }],
    aadharDocumentId: {
        type: schema.Types.ObjectId,
        ref: "aadharDocument"
    },
    aadharDocumentUpload: {
        type: Boolean,
        default: false
    },
    documentVerified: {
        type: String,
        enum: ["APPROVE", "PENDING", "REJECT"],
        default: "PENDING"
    },
    documentUpload: {
        type: Boolean,
        default: false
    },
    referralCode: {
        type: String
    },
    referredId: {
        type: schema.Types.ObjectId,
        ref: "user"
    },
    deviceToken: {
        type: String
    },
    SharedContract: [{
        type: schema.Types.ObjectId,
        ref: 'user'
    }],
    deviceType: {
        type: String,
        enum: ["android", "ios"]
    },
    gender: {
        type: String,
        enum: ["MALE", "FEMALE", "OTHER"],
        default: "MALE"
    },
    userType: {
        type: String,
        enum: ["ADMIN", "CUSTOMER", "PROVIDER"],
        default: "CUSTOMER"
    },
    bookingBlock: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        enum: ["ACTIVE", "BLOCK", "DELETE"],
        default: "ACTIVE"
    },
    online: {
        type: Boolean,
        default: true
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
},
    { timestamps: true });
userSchema.index({ location: "2dsphere" });
userSchema.plugin(mongoosePaginate);
userSchema.plugin(mongooseAggregatePaginate);
module.exports = mongoose.model("user", userSchema);
mongoose.model("user", userSchema).find({ userType: "ADMIN" }, (err, result) => {
    if (err) {
        console.log({ responseCode: 500, responseMessage: "Internal server error", err });
    }
    else if (result.length != 0) {
        console.log("Admin already created");
    }
    else {
        var object1 = {
            name: "Varun Chaudhary",
            countryCode: "+91",
            mobileNumber: "7084989678",
            userType: "ADMIN",
            password: bcrypt.hashSync("admin1234"),
            profilePic: "https://res.cloudinary.com/dkoznoze6/image/upload/v1563943105/n7zdoyvpxxqhexqybvkx.jpg",
            walletBalance: 0,
            accountVerify: true,
            completeProfile: true,
            documentVerified: "APPROVE",
            otp: 1234,
            referralCode: "ADMINWEB",
            location: {
                type: "Point",
                coordinates: [28.5223, 77.2849]
            },
        }
        var object2 = {
            name: "Customer",
            countryCode: "+91",
            mobileNumber: "9876123450",
            userType: "CUSTOMER",
            password: bcrypt.hashSync("customer123"),
            profilePic: "https://res.cloudinary.com/dkoznoze6/image/upload/v1563943105/n7zdoyvpxxqhexqybvkx.jpg",
            walletBalance: 0,
            accountVerify: true,
            completeProfile: true,
            documentVerified: "APPROVE",
            otp: 1234,
            referralCode: "CUSTOMERWEB",
            location: {
                type: "Point",
                coordinates: [28.5223, 77.2849]
            },
        }
        var object3 = {
            name: "Provider",
            countryCode: "+91",
            mobileNumber: "0123497865",
            userType: "PROVIDER",
            password: bcrypt.hashSync("provider123"),
            profilePic: "https://res.cloudinary.com/dkoznoze6/image/upload/v1563943105/n7zdoyvpxxqhexqybvkx.jpg",
            walletBalance: 0,
            accountVerify: true,
            completeProfile: true,
            documentVerified: "APPROVE",
            otp: 1234,
            referralCode: "PROVIDERWEB",
            location: {
                type: "Point",
                coordinates: [28.5223, 77.2849]
            }
        }
        mongoose.model("user", userSchema).create(object1, object2, object3, (adminErr, adminResult) => {
            if (adminErr) {
                console.log({ responseCode: 500, responseMessage: "Internal server error", adminErr });
            }
            else {
                console.log({ responseCode: 200, responseMessage: "Admin created successfully", adminResult });
            }
        })
    }
})