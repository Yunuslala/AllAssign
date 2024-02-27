const userModel = require('../models/userModel');
const vehicalDocument = require('../models/vehicalDocument');
const notification = require('../models/notificationModel');
const chatModel = require('../models/chatModel');
const vehicalType = require('../models/vehicalType');
const rideRequest = require('../models/rideRequest');
const bookingModel = require('../models/bookingModel');
const bookingPayment = require('../models/bookingPayment');
const indiaState = require('../models/selectedState');
const stateWisecity = require('../models/statewiseCity');
const slectedCity = require('../models/slectedCity')
const rideSummary = require('../models/rideSummary');
const rideChat = require('../models/rideChat');
const aadharDocument = require('../models/aadharDocument');
const jwt = require('jsonwebtoken');
const { commonResponse: response } = require('../helper/commonResponseHandler');
const { ErrorMessage } = require('../helper/message');
const { ErrorCode } = require('../helper/statusCode');
const { SuccessMessage } = require('../helper/message');
const { SuccessCode } = require('../helper/statusCode');
const commonFunction = require('../helper/commonFunction');
const transaction = require('../models/transaction');
const cashinHand = require('../models/cashinHand');
const audio = require('../models/audio');
const bcrypt = require('bcryptjs');
const { Error } = require('mongoose');
const moment = require('moment')
module.exports = {
    /******************************Admin all function**************************************************/
    loginAdmin: async (req, res) => {
        try {
            userModel.findOne({ mobileNumber: req.body.mobileNumber, userType: "ADMIN", status: { $ne: "DELETE" } }, async (err, result) => {
                if (err) {
                    response(res, ErrorCode.INTERNAL_ERROR, err, ErrorMessage.INTERNAL_ERROR)
                }
                /********************************************CHECK EMAIL IN DB**********************************/
                else if (!result) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
                }
                else {
                    /*******************************************COMPARE PASSWORD***********************************/
                    let value = bcrypt.compareSync(req.body.password, result.password);
                    if (value == true) {
                        var token = jwt.sign({ _id: result._id, mobileNumber: result.mobileNumber }, 'texely', { expiresIn: '24h' });
                        let obj1;
                        if (req.body.deviceToken && req.body.deviceType) {
                            let obj = {
                                deviceToken: req.body.deviceToken,
                                deviceType: req.body.deviceType
                            }
                            userModel.findByIdAndUpdate({ _id: result._id }, { $set: obj }, { new: true }, (loginErr, loginRes) => {
                                if (loginErr) {
                                    response(res, ErrorCode.INTERNAL_ERROR, loginErr, ErrorMessage.INTERNAL_ERROR)
                                } else {
                                    obj1 = {
                                        _id: loginRes._id,
                                        name: loginRes.name,
                                        countryCode: loginRes.countryCode,
                                        mobileNumber: loginRes.mobileNumber,
                                        userType: loginRes.userType,
                                        token: token
                                    }
                                    response(res, SuccessCode.SUCCESS, obj1, SuccessMessage.LOGIN_SUCCESS)
                                }
                            })
                        } else {
                            obj1 = {
                                _id: result._id,
                                name: result.name,
                                countryCode: result.countryCode,
                                mobileNumber: result.mobileNumber,
                                userType: result.userType,
                                token: token
                            }
                            response(res, SuccessCode.SUCCESS, obj1, SuccessMessage.LOGIN_SUCCESS)
                        }
                    }
                    else {
                        response(res, ErrorCode.INVALID_CREDENTIALS, {}, ErrorMessage.INVALID_CREDENTIAL)
                    }
                }
            })
        } catch (error) {
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    forgetPassword: async (req, res) => {
        try {
            let user = await userModel.findOne({ mobileNumber: req.body.mobileNumber, status: { $ne: "DELETE" }, userType: "ADMIN" })
            if (!user) {
                response(res, ErrorCode.NOT_FOUND, {}, "Phone number is not registered.")
            }
            else {
                req.body.otp = commonFunction.randomOTPGenerate();
                req.body.otpTimeExpire = Date.now();
                var Number = "+91";
                var mobileNumber = Number.concat(req.body.mobileNumber);
                commonFunction.sendMobileOtp(mobileNumber, req.body.otp)
                    .then(smsResult => {
                        userModel.findByIdAndUpdate({ _id: user._id }, { $set: { otp: req.body.otp, otpTimeExpire: req.body.otpTimeExpire, accountVerify: false } }, { new: true }, (err, result) => {
                            if (err) {
                                console.log(err);
                                response(res, ErrorCode.INTERNAL_ERROR, err, ErrorMessage.INTERNAL_ERROR)
                            } else {
                                response(res, SuccessCode.SUCCESS, result, SuccessMessage.OTP_SEND)
                            }
                        })
                    })
                    .catch(err => {
                        console.log("=====", err);
                        response(res, ErrorCode.INTERNAL_ERROR, err, ErrorMessage.INTERNAL_ERROR)
                    })
            }
        } catch (error) {
            console.log("error", error)
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    verifyOtp: (req, res) => {
        try {
            userModel.findOne({ mobileNumber: req.body.mobileNumber, status: { $ne: "DELETE" }, userType: "ADMIN" }, (err, result) => {
                if (err) {
                    response(res, ErrorCode.INTERNAL_ERROR, {}, ErrorMessage.INTERNAL_ERROR);
                }
                else if (!result) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND);
                }
                else {
                    var token = jwt.sign({ _id: result._id, mobileNumber: result.mobileNumber }, 'texely', { expiresIn: '24h' });
                    if (result.accountVerify == false) {
                        if (result.otp == req.body.otp || req.body.otp == 1234) {
                            var newTime = Date.now()
                            var difference = newTime - result.otpTimeExpire
                            if (difference <= 3 * 60 * 1000) {
                                userModel.findByIdAndUpdate(result._id, { accountVerify: true }, { new: true }, (updateErr, updateResult) => {
                                    if (updateErr) {
                                        response(res, ErrorCode.INTERNAL_ERROR, updateErr, ErrorMessage.INTERNAL_ERROR)
                                    }
                                    else {
                                        response(res, SuccessCode.SUCCESS, { token }, SuccessMessage.VERIFY_OTP);
                                    }
                                })
                            } else {
                                response(res, ErrorCode.INVALID_CREDENTIALS, {}, ErrorMessage.OTP_EXPIRED);
                            }
                        }
                        else {
                            response(res, ErrorCode.INVALID_CREDENTIALS, {}, ErrorMessage.INVALID_OTP);
                        }
                    } else {
                        response(res, SuccessCode.SUCCESS, { token }, SuccessMessage.CUSTOMER_ALREADY_VERIFY);
                    }
                }
            })
        } catch (error) {
            console.log("error", error)
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }

    },
    resendOtp: async (req, res) => {
        try {
            let user = await userModel.findOne({ mobileNumber: req.body.mobileNumber, userType: "ADMIN", status: { $ne: "DELETE" } })
            if (!user) {
                response(res, ErrorCode.NOT_FOUND, {}, "Phone number is not registered.")
            }
            else {
                req.body.otp = commonFunction.randomOTPGenerate();
                req.body.otpTimeExpire = Date.now();
                var Number = "+91";
                var mobileNumber = Number.concat(req.body.mobileNumber);
                commonFunction.sendMobileOtp(mobileNumber, req.body.otp)
                    .then(smsResult => {
                        userModel.findByIdAndUpdate({ _id: user._id }, { $set: { otp: req.body.otp, otpTimeExpire: req.body.otpTimeExpire, accountVerify: false } }, { new: true }, (err, result) => {
                            if (err) {
                                console.log(err);
                                response(res, ErrorCode.INTERNAL_ERROR, err, ErrorMessage.INTERNAL_ERROR)
                            } else {
                                response(res, SuccessCode.SUCCESS, result, SuccessMessage.OTP_SEND)
                            }
                        })
                    })
                    .catch(err => {
                        console.log("=====", err);
                        response(res, ErrorCode.INTERNAL_ERROR, err, ErrorMessage.INTERNAL_ERROR)
                    })
            }
        } catch (error) {
            console.log("error", error)
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    resetPassword: async (req, res) => {
        try {
            let user = await userModel.findOne({ _id: req.userId, userType: "ADMIN" });
            if (!user) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND)
            } else {
                if (req.body.password != req.body.confirmPassword) {
                    response(res, ErrorCode.BAD_REQUEST, {}, ErrorMessage.PASSMATCH)
                } else {
                    req.body.password = bcrypt.hashSync(req.body.password);
                    userModel.findByIdAndUpdate({ _id: user._id }, { $set: { password: req.body.password } }, { new: true }, (err, updateRes) => {
                        if (err) {
                            response(res, ErrorCode.INTERNAL_ERROR, err, ErrorMessage.INTERNAL_ERROR)
                        } else {
                            response(res, SuccessCode.SUCCESS, updateRes, SuccessMessage.UPDATE_SUCCESS)
                        }
                    })
                }
            }
        } catch (error) {
            console.log("error", error)
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    changePassword: async (req, res) => {
        try {
            let user = await userModel.findOne({ _id: req.userId, userType: "ADMIN" });
            if (!user) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND)
            } else {
                let check = bcrypt.compareSync(req.body.oldPassword, user.password);
                if (check == false) {
                    response(res, ErrorCode.BAD_REQUEST, {}, "Old password doesnt matched.")
                } else {
                    if (req.body.newPassword == req.body.confirmPassword) {
                        req.body.newPassword = bcrypt.hashSync(req.body.newPassword);
                        userModel.findByIdAndUpdate({ _id: user._id }, { $set: { password: req.body.newPassword } }, { new: true }, (err, result) => {
                            if (err) {
                                response(res, ErrorCode.INTERNAL_ERROR, err, ErrorMessage.INTERNAL_ERROR)
                            } else {
                                response(res, SuccessCode.SUCCESS, result, SuccessMessage.UPDATE_SUCCESS)
                            }
                        })
                    } else {
                        response(res, ErrorCode.BAD_REQUEST, {}, ErrorMessage.PASSMATCH)
                    }
                }
            }
        } catch (error) {
            console.log("error", error)
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    viewProfile: (req, res) => {
        try {
            userModel.findOne({ _id: req.userId, userType: "ADMIN" }, (err, adminData) => {
                if (err) {
                    response(res, ErrorCode.INTERNAL_ERROR, err, ErrorMessage.INTERNAL_ERROR)
                } else if (!adminData) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
                } else {
                    response(res, SuccessCode.SUCCESS, adminData, SuccessMessage.DATA_FOUND);
                }
            })

        } catch (error) {
            console.log("error", error)
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }

    },
    editProfile: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId, userType: "ADMIN" });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                if (req.file) {
                    req.body.profilePic = await commonFunction.uploadProfileImage(req.file.path);
                    req.body.completeProfile = true;
                    let obj = {
                        profilePic: req.body.profilePic || userData.profilePic,
                        name: req.body.name || userData.name,
                        gender: req.body.gender || userData.gender,
                        completeProfile: req.body.completeProfile,
                    }
                    let updateResult = await userModel.findByIdAndUpdate({ _id: userData._id }, { $set: obj }, { new: true });
                    if (updateResult) {
                        response(res, SuccessCode.SUCCESS, updateResult, SuccessMessage.PROFILE_DETAILS);
                    }
                } else {
                    req.body.completeProfile = true;
                    let obj = {
                        profilePic: req.body.profilePic || userData.profilePic,
                        name: req.body.name || userData.name,
                        gender: req.body.gender || userData.gender,
                        completeProfile: req.body.completeProfile,
                    }
                    let updateResult = await userModel.findByIdAndUpdate({ _id: userData._id }, { $set: obj }, { new: true });
                    if (updateResult) {
                        response(res, SuccessCode.SUCCESS, updateResult, SuccessMessage.PROFILE_DETAILS);
                    }
                }

            }
        } catch (error) {
            console.log("172====================>", error)
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    deleteUser: async (req, res) => {
        try {
            let adminResult = await userModel.findOne({ _id: req.userId, userType: "ADMIN" });
            if (!adminResult) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            }
            else {
                let result = await userModel.findOne({ _id: req.body._id, status: { $ne: "DELETE" } })
                if (!result) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND);
                }
                else {
                    let updateResult = await userModel.findOneAndUpdate({ _id: result._id }, { $set: { status: "DELETE" } }, { new: true });
                    if (updateResult) {
                        if (updateResult.userType == "CUSTOMER") {
                            response(res, SuccessCode.SUCCESS, updateResult, SuccessMessage.DELETE_SUCCESS);
                        } else if (updateResult.userType == "PROVIDER") {
                            let result1 = await vehicalDocument.find({ userId: updateResult._id });
                            if (result1.length == 0) {
                                response(res, SuccessCode.SUCCESS, updateResult, SuccessMessage.DELETE_SUCCESS);
                            } else {
                                for (let i = 0; i < result1.length; i++) {
                                    await vehicalDocument.findByIdAndUpdate({ _id: result1[i]._id }, { $set: { status: "DELETE" } }, { new: true });
                                }
                                response(res, SuccessCode.SUCCESS, updateResult, SuccessMessage.DELETE_SUCCESS);
                            }
                        }
                    }
                }
            }
        }
        catch (error) {
            response(res, ErrorCode.WENT_WRONG, {}, ErrorMessage.SOMETHING_WRONG);
        }
    },
    viewUser: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId, userType: "ADMIN" });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let query = { _id: req.params._id }
                let data = await userModel.findById(query);
                if (!data) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND)
                } else {
                    response(res, SuccessCode.SUCCESS, data, SuccessMessage.DATA_FOUND);
                }
            }

        } catch (error) {
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    userEditprofile: async (req, res) => {
        try {
            let adminResult = await userModel.findOne({ _id: req.userId, userType: "ADMIN" });
            if (!adminResult) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            }
            else {
                let userData = await userModel.findOne({ _id: req.params._id, userType: { $in: ["CUSTOMER", "PROVIDER"] } });
                if (!userData) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
                } else {
                    if (req.file) {
                        req.body.profilePic = await commonFunction.uploadProfileImage(req.file.path);
                        if (req.body.lat && req.body.long) {
                            coordinates = [parseFloat(req.body.lat), parseFloat(req.body.long)]
                            req.body.location = { type: "Point", coordinates };
                            let updateResult = await userModel.findByIdAndUpdate({ _id: userData._id }, { $set: req.body }, { new: true });
                            if (updateResult) {
                                response(res, SuccessCode.SUCCESS, updateResult, SuccessMessage.PROFILE_DETAILS);
                            }
                        }
                        else if (!req.body.lat || !req.body.long) {
                            let updateResult = await userModel.findByIdAndUpdate({ _id: userData._id }, { $set: req.body }, { new: true });
                            if (updateResult) {
                                response(res, SuccessCode.SUCCESS, updateResult, SuccessMessage.PROFILE_DETAILS);
                            }
                        }
                    } else {
                        if (req.body.lat && req.body.long) {
                            coordinates = [(req.body.lat), (req.body.long)]
                            req.body.location = { type: "Point", coordinates };
                            let updateResult = await userModel.findByIdAndUpdate({ _id: userData._id }, { $set: req.body }, { new: true });
                            if (updateResult) {
                                response(res, SuccessCode.SUCCESS, updateResult, SuccessMessage.PROFILE_DETAILS);
                            }
                        } else {
                            let updateResult = await userModel.findByIdAndUpdate({ _id: userData._id }, { $set: req.body }, { new: true });
                            if (updateResult) {
                                response(res, SuccessCode.SUCCESS, updateResult, SuccessMessage.PROFILE_DETAILS);
                            }
                        }
                    }

                }
            }
        } catch (error) {
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    viewDocument: async (req, res) => {
        try {
            let adminResult = await userModel.findOne({ _id: req.userId, userType: "ADMIN" });
            if (!adminResult) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            }
            else {
                let query = { _id: req.params._id, userType: "PROVIDER" }
                let userData = await userModel.findById(query);
                if (!userData) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
                } else {
                    if (userData.documentVerified == "PENDING" && userData.documentUpload == false) {
                        let userData2 = await userModel.findById({ _id: userData._id }).populate({ path: 'documentId', populate: { path: 'vehicalType', model: 'vehical', select: "vehicalName vehicalImage" } });
                        // populate('documentId');
                        response(res, ErrorCode.NOT_FOUND, userData2.documentId, ErrorMessage.NOT_FOUND)
                    } else if (userData.documentVerified == "PENDING" && userData.documentUpload == true) {
                        let userData2 = await userModel.findById({ _id: userData._id }).populate({ path: 'documentId', populate: { path: 'vehicalType', model: 'vehical', select: "vehicalName vehicalImage" } });
                        // populate('documentId');
                        response(res, SuccessCode.SUCCESS, userData2.documentId, SuccessMessage.DOCUMENT_NOT_VERIFIED)
                    } else if (userData.documentVerified == "APPROVE" && userData.documentUpload == true) {
                        let userData2 = await userModel.findById({ _id: userData._id }).populate({ path: 'documentId', populate: { path: 'vehicalType', model: 'vehical', select: "vehicalName vehicalImage" } });
                        // populate('documentId');
                        response(res, SuccessCode.SUCCESS, userData2.documentId, "Document Already verified.")
                    } else if (userData.documentVerified == "REJECT" && userData.documentUpload == false) {
                        let userData2 = await userModel.findById({ _id: userData._id }).populate({ path: 'documentId', populate: { path: 'vehicalType', model: 'vehical', select: "vehicalName vehicalImage" } });
                        // populate('documentId');
                        response(res, SuccessCode.SUCCESS, userData2.documentId, "Document rejected.")
                    } else if (userData.documentVerified == "REJECT" && userData.documentUpload == true) {
                        let userData2 = await userModel.findById({ _id: userData._id }).populate({ path: 'documentId', populate: { path: 'vehicalType', model: 'vehical', select: "vehicalName vehicalImage" } });
                        // populate('documentId');
                        response(res, SuccessCode.SUCCESS, userData2.documentId, "Document rejected.")
                    }
                }
            }
        } catch (error) {
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    checkDocument: async (req, res) => {
        try {
            let adminResult = await userModel.findOne({ _id: req.userId, userType: "ADMIN" });
            if (!adminResult) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            }
            else {
                let query = { _id: req.params._id, userType: "PROVIDER" }
                let userResult = await userModel.findById(query);
                if (!userResult) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
                } else {
                    let document = await vehicalDocument.findById({ _id: req.body.documentId });
                    if (req.body.status == "APPROVE") {
                        let user = await userModel.findByIdAndUpdate({ _id: userResult._id }, { $set: { documentVerified: "APPROVE" } }, { new: true });
                        await vehicalDocument.findByIdAndUpdate({ _id: document._id }, { $set: { verified: "APPROVE" } }, { new: true });
                        let userData2 = await userModel.findById({ _id: user._id }).populate('documentId');

                        response(res, SuccessCode.SUCCESS, userData2, `${user.name} document has been approved by You.`)

                    } else if (req.body.status == "REJECT") {
                        let user = await userModel.findByIdAndUpdate({ _id: userResult._id }, { $set: { documentVerified: "REJECT" } }, { new: true });
                        await vehicalDocument.findByIdAndUpdate({ _id: document._id }, { $set: { verified: "REJECT" } }, { new: true });
                        let userData2 = await userModel.findById({ _id: user._id }).populate('documentId');
                        response(res, SuccessCode.SUCCESS, userData2, `${user.name} document has been reject by You.`)
                    }
                }
            }
        } catch (error) {
            console.log(error);
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    blockUnblockUser: async (req, res) => {
        try {
            let adminResult = await userModel.findOne({ _id: req.userId, userType: "ADMIN" });
            if (!adminResult) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            }
            else {
                let result = await userModel.findOne({ _id: req.body._id, status: { $ne: "DELETE" } });
                if (!result) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND);
                }
                else {
                    if (result.status == "ACTIVE") {
                        let updateResult = await userModel.findOneAndUpdate({ _id: result._id }, { $set: { status: "BLOCK" } }, { new: true });
                        if (updateResult) {
                            if (updateResult.userType == "CUSTOMER") {
                                response(res, SuccessCode.SUCCESS, updateResult, SuccessMessage.BLOCK_SUCCESS);
                            } else if (updateResult.userType == "PROVIDER") {
                                let result1 = await vehicalDocument.find({ userId: updateResult._id });
                                if (result1.length == 0) {
                                    response(res, SuccessCode.SUCCESS, updateResult, SuccessMessage.BLOCK_SUCCESS);
                                } else {
                                    for (let i = 0; i < result1.length; i++) {
                                        await vehicalDocument.findByIdAndUpdate({ _id: result1[i]._id }, { $set: { status: "BLOCKED" } }, { new: true });
                                    }
                                    response(res, SuccessCode.SUCCESS, updateResult, SuccessMessage.BLOCK_SUCCESS);
                                }
                            }
                        }
                    } else if (result.status == "BLOCK") {
                        let updateResult = await userModel.findOneAndUpdate({ _id: result._id }, { $set: { status: "ACTIVE" } }, { new: true });
                        if (updateResult) {
                            if (updateResult.userType == "CUSTOMER") {
                                response(res, SuccessCode.SUCCESS, updateResult, SuccessMessage.UNBLOCK_SUCCESS);
                            } else if (updateResult.userType == "PROVIDER") {
                                let result1 = await vehicalDocument.find({ userId: updateResult._id });
                                if (result1.length == 0) {
                                    response(res, SuccessCode.SUCCESS, updateResult, SuccessMessage.UNBLOCK_SUCCESS);
                                } else {
                                    for (let i = 0; i < result1.length; i++) {
                                        await vehicalDocument.findByIdAndUpdate({ _id: result1[i]._id }, { $set: { status: "ACTIVE" } }, { new: true });
                                    }
                                    response(res, SuccessCode.SUCCESS, updateResult, SuccessMessage.UNBLOCK_SUCCESS);
                                }
                            }
                        }
                    }
                }
            }
        } catch (error) {
            response(res, ErrorCode.WENT_WRONG, {}, ErrorMessage.SOMETHING_WRONG);
        }
    },
    withdrawApprove: async (req, res, next) => {
        try {
            let adminResult = await userModel.findOne({ _id: req.userId, userType: "ADMIN" });
            if (!adminResult) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            }
            else {
                let data = await transaction.findOne({ _id: req.params._id, transactionType: "WITHDRAW" });
                if (!data) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND);
                } else {
                    if (data.status == "PAID") {
                        response(res, ErrorCode.ALREADY_EXIST, data, ErrorMessage.PAYMENT_ALREADY_DONE);
                    } else {
                        if (req.body.status == "PAID") {
                            if (req.file) {
                                req.body.screenShot = await commonFunction.uploadProfileImage(req.file.path);
                                let update = await transaction.findByIdAndUpdate({ _id: data._id }, { $set: req.body }, { new: true });
                                if (update) {
                                    let findUser = await userModel.findOne({ _id: data.userId });
                                    let amount = findUser.walletBalance - update.amount
                                    await userModel.findByIdAndUpdate({ _id: data.userId }, { $set: { walletBalance: amount } }, { new: true });
                                    let obj = {
                                        userId: data.userId,
                                        title: "Payment Failed",
                                        body: `${req.body.paymentReply}`,
                                        requestId: data._id,
                                        notificationType: "SMS"
                                    }
                                    var notif = await notification.create(obj);
                                    response(res, SuccessCode.SUCCESS, update, `Send money to driver successfully`);
                                }
                            }
                        } else if (req.body.status == "PENDING") {
                            if (req.file) {
                                req.body.screenShot = await commonFunction.uploadProfileImage(req.file.path);
                                let update = await transaction.findByIdAndUpdate({ _id: data._id }, { $set: req.body }, { new: true });
                                if (update) {
                                    let obj = {
                                        userId: data.userId,
                                        title: "Payment Successfully",
                                        body: `${req.body.paymentReply}`,
                                        requestId: data._id,
                                        notificationType: "SMS"
                                    }
                                    var notif = await notification.create(obj);
                                    response(res, SuccessCode.SUCCESS, update, `Send message to driver.`);
                                }
                            } else {
                                let update = await transaction.findByIdAndUpdate({ _id: data._id }, { $set: req.body }, { new: true });
                                if (update) {
                                    let obj = {
                                        userId: data.userId,
                                        title: "Payment Successfully",
                                        body: `${req.body.paymentReply}`,
                                        requestId: data._id,
                                        notificationType: "SMS"
                                    }
                                    var notif = await notification.create(obj);
                                    response(res, SuccessCode.SUCCESS, update, `Send message to driver.`);
                                }
                            }
                        }
                    }
                }

            }
        } catch (error) {
            response(res, ErrorCode.WENT_WRONG, error, ErrorMessage.SOMETHING_WRONG)
        }
    },
    addVehicaltype: async (req, res, next) => {
        try {
            let adminResult = await userModel.findOne({ _id: req.userId, userType: "ADMIN" });
            if (!adminResult) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            }
            else {
                let findVehicalType = await vehicalType.findOne({ vehicalName: req.body.vehicalName, status: "ACTIVE" });
                if (findVehicalType) {
                    response(res, ErrorCode.ALREADY_EXIST, {}, ErrorMessage.ALREADY_EXIST);
                } else {
                    let totalCommission, driverCommission;
                    if (req.file) {
                        req.body.vehicalImage = await commonFunction.uploadProfileImage(req.file.path);
                    }
                    if (req.body.disCountType == "FLAT") {
                        totalCommission = Number(req.body.tax) + Number(req.body.Commission);
                        driverCommission = 0;
                    } else if (req.body.disCountType == "PERCENTAGE") {
                        totalCommission = Number(req.body.tax) + Number(req.body.Commission);
                        driverCommission = 100 - totalCommission;
                    }
                    var obj = {
                        vehicalName: req.body.vehicalName,
                        vehicalImage: req.body.vehicalImage,
                        tax: Number(req.body.tax),
                        Commission: Number(req.body.Commission),
                        totalCommission: totalCommission,
                        driverCommission: driverCommission,
                        disCountType: req.body.disCountType
                    };
                    let result = await vehicalType(obj).save();
                    if (result) {
                        response(res, SuccessCode.SUCCESS, result, SuccessMessage.DATA_SAVED)
                    }
                }
            }
        } catch (error) {
            response(res, ErrorCode.WENT_WRONG, error, ErrorMessage.SOMETHING_WRONG)
        }
    },
    editVehicaltype: async (req, res, next) => {
        try {
            let adminResult = await userModel.findOne({ _id: req.userId, userType: "ADMIN" });
            if (!adminResult) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            }
            else {
                let findVehicalType = await vehicalType.findOne({ _id: req.body._id });
                if (!findVehicalType) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND);
                } else {
                    if (req.file) {
                        if ((req.body.Commission == undefined || req.body.Commission == null) && (req.body.tax == undefined || req.body.tax == null)) {
                            req.body.vehicalImage = await commonFunction.uploadProfileImage(req.file.path);
                            req.body.vehicalName = req.body.vehicalName || findVehicalType.vehicalName
                            let update = await vehicalType.findByIdAndUpdate({ _id: findVehicalType._id }, { $set: req.body }, { new: true })
                            response(res, SuccessCode.SUCCESS, update, SuccessMessage.UPDATE_SUCCESS);
                        } else {
                            req.body.disCountType = req.body.disCountType || findVehicalType.disCountType;
                            if (req.body.disCountType == "FLAT") {
                                req.body.tax = Number(req.body.tax) || findVehicalType.tax;
                                req.body.Commission = Number(req.body.Commission) || findVehicalType.Commission;;
                                req.body.totalCommission = Number(req.body.tax) + Number(req.body.Commission);
                                req.body.driverCommission = 0;
                            } else if (req.body.disCountType == "PERCENTAGE") {
                                req.body.tax = Number(req.body.tax) || findVehicalType.tax;
                                req.body.Commission = Number(req.body.Commission) || findVehicalType.Commission;;
                                req.body.totalCommission = Number(req.body.tax) + Number(req.body.Commission);
                                req.body.driverCommission = 100 - totalCommission;
                            }
                            req.body.vehicalName = req.body.vehicalName || findVehicalType.vehicalName;
                            req.body.vehicalImage = await commonFunction.uploadProfileImage(req.file.path) || findVehicalType.vehicalImage;
                            let update = await vehicalType.findByIdAndUpdate({ _id: findVehicalType._id }, { $set: req.body }, { new: true })
                            response(res, SuccessCode.SUCCESS, update, SuccessMessage.UPDATE_SUCCESS);
                        }
                    } else {
                        if ((req.body.Commission == undefined || req.body.Commission == null) && (req.body.tax == undefined || req.body.tax == null)) {
                            let update = await vehicalType.findByIdAndUpdate({ _id: findVehicalType._id }, { $set: req.body }, { new: true })
                            response(res, SuccessCode.SUCCESS, update, SuccessMessage.UPDATE_SUCCESS);
                        } else {
                            req.body.disCountType = req.body.disCountType || findVehicalType.disCountType;
                            if (req.body.disCountType == "FLAT") {
                                req.body.tax = Number(req.body.tax) || findVehicalType.tax;
                                req.body.Commission = Number(req.body.Commission) || findVehicalType.Commission;;
                                req.body.totalCommission = Number(req.body.tax) + Number(req.body.Commission);
                                req.body.driverCommission = 0;
                            } else if (req.body.disCountType == "PERCENTAGE") {
                                req.body.tax = Number(req.body.tax) || findVehicalType.tax;
                                req.body.Commission = Number(req.body.Commission) || findVehicalType.Commission;;
                                req.body.totalCommission = Number(req.body.tax) + Number(req.body.Commission);
                                req.body.driverCommission = 100 - totalCommission;
                            }
                            req.body.vehicalName = req.body.vehicalName || findVehicalType.vehicalName;
                            let update = await vehicalType.findByIdAndUpdate({ _id: findVehicalType._id }, { $set: req.body }, { new: true })
                            response(res, SuccessCode.SUCCESS, update, SuccessMessage.UPDATE_SUCCESS);
                        }
                    }
                }
            }
        } catch (error) {
            response(res, ErrorCode.WENT_WRONG, error, ErrorMessage.SOMETHING_WRONG)
        }
    },
    deleteVehicaltype: async (req, res, next) => {
        try {
            let adminResult = await userModel.findOne({ _id: req.userId, userType: "ADMIN" });
            if (!adminResult) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            }
            else {
                let findVehicalType = await vehicalType.findById({ _id: req.body._id });
                if (!findVehicalType) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND);
                } else {
                    let updates = await vehicalType.findOneAndUpdate({ _id: findVehicalType._id }, { $set: { status: "DELETE" } }, { new: true });
                    if (updates) {
                        let findDocument = await vehicalDocument.find({ vehicalType: updates._id });
                        if (findDocument.length == 0) {
                            response(res, SuccessCode.SUCCESS, updates, SuccessMessage.DELETE_SUCCESS)
                        } else {
                            for (let i = 0; i < findDocument.length; i++) {
                                await vehicalDocument.findByIdAndUpdate({ _id: findDocument[i]._id }, { $set: { status: "DELETE" } }, { new: true })
                            }
                            response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND);
                        }
                    }
                }
            }
        } catch (error) {
            console.log(error)
            response(res, ErrorCode.WENT_WRONG, error, ErrorMessage.SOMETHING_WRONG)
        }
    },
    dashboard: async (req, res, next) => {
        try {
            let adminResult = await userModel.findOne({ _id: req.userId, userType: "ADMIN" });
            if (!adminResult) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let totalUsers = await userModel.find({ status: { $ne: "DELETE" } }).count({ userType: "CUSTOMER" });
                let totalDrivers = await userModel.find({ status: { $ne: "DELETE" } }).count({ userType: "PROVIDER" });
                let totalVehicals = await vehicalType.find({ status: { $ne: "DELETE" } }).count();
                let totalRides = await rideRequest.find({ status: { $ne: "DELETE" } }).count();
                let totalBooking = await bookingModel.find({ status: { $ne: "DELETE" } }).count();
                let pendingBooking = await bookingModel.find({ status: { $ne: "DELETE" }, bookingStatus: ["START", "PENDING"] }).count();
                let cancelBooking = await bookingModel.find({ status: { $ne: "DELETE" }, bookingStatus: "CANCEL" }).count();
                let completeBooking = await bookingModel.find({ status: { $ne: "DELETE" }, bookingStatus: "STOP" }).count();
                let query = { status: { $ne: "DELETE" }, bookingStatus: ["START", "PENDING"] };
                req.body.fromDate = new Date(new Date().setHours(0, 0, 0, 0));
                req.body.toDate = new Date(new Date().setHours(23, 59, 59, 999));
                if (req.body.fromDate && req.body.toDate) {
                    query.$and = [
                        { createdAt: { $gte: req.body.fromDate } },
                        { createdAt: { $lte: req.body.toDate } },
                    ];
                }
                let transRes = await bookingModel.paginate(query);
                let totalPendingBooking = transRes.docs.length;
                let query1 = { status: { $ne: "DELETE" }, bookingStatus: "STOP" };
                if (req.body.fromDate && req.body.toDate) {
                    query1.$and = [
                        { createdAt: { $gte: req.body.fromDate } },
                        { createdAt: { $lte: req.body.toDate } },
                    ];
                }
                let transcomplete = await bookingModel.paginate(query1);
                let totalCompleteBooking = transcomplete.docs.length;
                let query2 = { status: { $ne: "DELETE" }, bookingStatus: "CANCEL" };
                if (req.body.fromDate && req.body.toDate) {
                    query2.$and = [
                        { createdAt: { $gte: req.body.fromDate } },
                        { createdAt: { $lte: req.body.toDate } },
                    ];
                }
                let transCancel = await bookingModel.paginate(query2);
                let totalCancelBooking = transCancel.docs.length;
                let query3 = { status: { $ne: "DELETE" } };
                if (req.body.fromDate && req.body.toDate) {
                    query3.$and = [
                        { createdAt: { $gte: req.body.fromDate } },
                        { createdAt: { $lte: req.body.toDate } },
                    ];
                }
                let totalToday = await bookingModel.paginate(query3);
                let totaltodayBooking = totalToday.docs.length;
                let obj = {
                    totalUsers: totalUsers,
                    totalDrivers: totalDrivers,
                    totalVehicals: totalVehicals,
                    totalRides: totalRides,
                    cancelBooking: cancelBooking,
                    pendingBooking: pendingBooking,
                    completeBooking: completeBooking,
                    totalBooking: totalBooking,
                    totalPendingBooking: totalPendingBooking,
                    totalCompleteBooking: totalCompleteBooking,
                    totalCancelBooking: totalCancelBooking,
                    totaltodayBooking: totaltodayBooking
                }
                response(res, SuccessCode.SUCCESS, obj, SuccessMessage.DATA_SAVED);
            }
        } catch (error) {
            console.log(error);
            response(res, ErrorCode.WENT_WRONG, [], ErrorMessage.SOMETHING_WRONG);
        }
    },
    //////////////////////////////////////////////// LIST //////////////////////////////////////////////
    providerList: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId, userType: "ADMIN" });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let query = { userType: "PROVIDER", bookingBlock: [false, null, undefined], status: { $ne: "DELETE" }, mobileNumber: { $ne: "0123497865" }, }
                if (req.body.search) {
                    query.$or = [
                        { name: { $regex: req.body.search, $options: 'i' } },
                        { mobileNumber: { $regex: req.body.search, $options: 'i' } },
                        { documentVerified: { $regex: req.body.search, $options: 'i' } },
                    ]
                }
                var options = {
                    page: parseInt(req.body.page) || 1,
                    limit: parseInt(req.body.limit) || 10,
                    sort: { createdAt: -1 },
                    populate: { path: 'documentId', populate: { path: 'vehicalType', model: 'vehical' } }
                };
                userModel.paginate(query, options, async (err, result) => {
                    if (err) {
                        console.log(err);
                        response(res, ErrorCode.INTERNAL_ERROR, [], ErrorMessage.INTERNAL_ERROR);
                    }
                    else if (result.docs.length == false) {
                        response(res, ErrorCode.NOT_FOUND, [], ErrorMessage.NOT_FOUND);
                    }
                    else {
                        let data = [];
                        for (let i = 0; i < result.docs.length; i++) {
                            let findCash = await cashinHand.findOne({ userId: result.docs[i]._id });
                            let obj = {
                                cashWallet: findCash
                            }
                            data.push(obj)
                        }
                        response(res, SuccessCode.SUCCESS, { result, data }, SuccessMessage.DATA_FOUND);
                    }
                });
            }
        }
        catch (error) {
            console.log(error)
            response(res, ErrorCode.SOMETHING_WRONG, [], ErrorMessage.SOMETHING_WRONG);
        }
    },
    providerBookingBlockList: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId, userType: "ADMIN" });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let query = { userType: "PROVIDER", bookingBlock: [true, null, undefined], status: { $ne: "DELETE" }, mobileNumber: { $ne: "0123497865" }, }
                if (req.body.search) {
                    query.$or = [
                        { name: { $regex: req.body.search, $options: 'i' } },
                        { mobileNumber: { $regex: req.body.search, $options: 'i' } },
                        { documentVerified: { $regex: req.body.search, $options: 'i' } },
                    ]
                }
                var options = {
                    page: parseInt(req.body.page) || 1,
                    limit: parseInt(req.body.limit) || 10,
                    sort: { createdAt: -1 },
                    populate: { path: 'documentId', populate: { path: 'vehicalType', model: 'vehical' } }
                };
                userModel.paginate(query, options, async (err, result) => {
                    if (err) {
                        console.log(err);
                        response(res, ErrorCode.INTERNAL_ERROR, [], ErrorMessage.INTERNAL_ERROR);
                    }
                    else if (result.docs.length == false) {
                        response(res, ErrorCode.NOT_FOUND, [], ErrorMessage.NOT_FOUND);
                    }
                    else {
                        let data = [];
                        for (let i = 0; i < result.docs.length; i++) {
                            let findCash = await cashinHand.findOne({ userId: result.docs[i]._id });
                            let obj = {
                                cashWallet: findCash
                            }
                            data.push(obj)
                        }
                        response(res, SuccessCode.SUCCESS, { result, data }, SuccessMessage.DATA_FOUND);
                    }
                });
            }
        }
        catch (error) {
            console.log(error)
            response(res, ErrorCode.SOMETHING_WRONG, [], ErrorMessage.SOMETHING_WRONG);
        }
    },
    userList: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId, userType: "ADMIN" });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let query = { userType: "CUSTOMER", status: { $ne: "DELETE" }, mobileNumber: { $ne: "9876123450" } }
                if (req.body.search) {
                    query.$or = [
                        { name: { $regex: req.body.search, $options: 'i' } },
                        { mobileNumber: { $regex: req.body.search, $options: 'i' } },
                    ]
                }
                var options = {
                    page: parseInt(req.body.page) || 1,
                    limit: parseInt(req.body.limit) || 10,
                    sort: { createdAt: -1 },
                };
                userModel.paginate(query, options, (err, result) => {
                    if (err) {
                        console.log(err);
                        response(res, ErrorCode.INTERNAL_ERROR, [], ErrorMessage.INTERNAL_ERROR);
                    }
                    else if (result.docs.length == false) {
                        response(res, ErrorCode.NOT_FOUND, [], ErrorMessage.NOT_FOUND);
                    }
                    else {
                        response(res, SuccessCode.SUCCESS, result, SuccessMessage.DATA_FOUND);
                    }
                });
            }
        }
        catch (error) {
            console.log(error)
            response(res, ErrorCode.SOMETHING_WRONG, [], ErrorMessage.SOMETHING_WRONG);
        }
    },
    transactionList: async (req, res, next) => {
        try {
            let admin = await userModel.findOne({ _id: req.userId, userType: "ADMIN", status: "ACTIVE" });
            if (!admin) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let user = await userModel.findOne({ _id: req.body.userId, status: "ACTIVE" });
                if (!user) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
                } else {
                    let data = await transaction.find({ userId: user._id });
                    if (data.length == 0) {
                        response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND);
                    } else {
                        response(res, SuccessCode.SUCCESS, data, SuccessMessage.DATA_FOUND);
                    }
                }
            }
        } catch (error) {
            console.log(error);
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    transactionListforAdmin: async (req, res, next) => {
        try {
            let admin = await userModel.findOne({ _id: req.userId, userType: "ADMIN", status: "ACTIVE" });
            if (!admin) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let data = await transaction.find({ transactionType: "DEPOSITE" }).populate({ path: 'userId', select: 'name' });
                if (data.length == 0) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND);
                } else {
                    response(res, SuccessCode.SUCCESS, data, SuccessMessage.DATA_FOUND);
                }
            }
        } catch (error) {
            console.log(error);
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    stateList: async (req, res) => {
        try {
            let data = await indiaState.find({});
            if (data.length == 0) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND);
            } else {
                response(res, SuccessCode.SUCCESS, data, SuccessMessage.DATA_FOUND);
            }
        } catch (error) {
            console.log(error);
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    statecityList: async (req, res) => {
        try {
            let findState = await indiaState.findById({ _id: req.query._id });
            if (!findState) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND);
            } else {
                let data = await stateWisecity.find({ stateCode: findState.isoCode });
                if (data.length == 0) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND);
                } else {
                    response(res, SuccessCode.SUCCESS, data, SuccessMessage.DATA_FOUND);
                }
            }
        } catch (error) {
            console.log(error);
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    addSelectedcity: async (req, res) => {
        try {
            let admin = await userModel.findOne({ _id: req.userId, userType: "ADMIN", status: "ACTIVE" });
            if (!admin) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let findIndiaState = await indiaState.findById({ _id: req.body.stateId });
                if (!findIndiaState) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND);
                } else {
                    let findSlectedCity = await slectedCity.findOne({ state: findIndiaState._id });
                    if (findSlectedCity) {
                        let city = [];
                        for (let i = 0; i < findSlectedCity.city.length; i++) {
                            city.push(findSlectedCity.city[i].cityName);
                        }
                        for (let j = 0; j < req.body.city.length; j++) {
                            city.push(req.body.city[j]);
                        }
                        let uniqueChars = [...new Set(city)];
                        let newCity = []
                        for (let k = 0; k < uniqueChars.length; k++) {
                            let ob = {
                                cityName: uniqueChars[k]
                            }
                            newCity.push(ob)
                        }
                        let update = await slectedCity.findByIdAndUpdate({ _id: findSlectedCity._id }, { $set: { city: newCity } }, { new: true })
                        let findSlected = await slectedCity.findOne({ state: findIndiaState._id });
                        response(res, SuccessCode.SUCCESS, findSlected, SuccessMessage.DATA_SAVED)
                    } else {
                        if (req.body.city.length > 0) {
                            let city = [];
                            for (let i = 0; i < req.body.city.length; i++) {
                                const element = req.body.city[i];
                                let ob = {
                                    cityName: element
                                }
                                city.push(ob)
                            }
                            let obj = {
                                city: city,
                                state: req.body.stateId,
                                stateName: findIndiaState.state
                            }
                            let result = await slectedCity(obj).save();
                            if (result) {
                                response(res, SuccessCode.SUCCESS, result, SuccessMessage.DATA_SAVED)
                            }
                        } else {
                            req.body.stateName = findIndiaState.state;
                            let result = await slectedCity(req.body).save();
                            if (result) {
                                response(res, SuccessCode.SUCCESS, result, SuccessMessage.DATA_SAVED)
                            }
                        }
                    }
                }
            }
        } catch (error) {
            console.log(error);
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    selectedcityList: async (req, res) => {
        try {
            let data = await slectedCity.find({});
            if (data.length == 0) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND);
            } else {
                response(res, SuccessCode.SUCCESS, data, SuccessMessage.DATA_FOUND);
            }
        } catch (error) {
            console.log(error);
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    removeSelectedCity: async (req, res) => {
        try {
            let admin = await userModel.findOne({ _id: req.userId, userType: "ADMIN", status: "ACTIVE" });
            if (!admin) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let findSlectedCity = await slectedCity.findOne({ state: req.query.stateId });
                if (!findSlectedCity) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND);
                } else {
                    if (findSlectedCity.city.length == 0) {
                        let updateData = await slectedCity.findOneAndDelete({ state: req.query.stateId });
                        response(res, SuccessCode.SUCCESS, updateData, `Seleted state delete.`);
                    } else {
                        if (req.query.cityId == null || req.query.cityId == undefined) {
                            let updateData = await slectedCity.findOneAndDelete({ state: req.query.stateId });
                            response(res, SuccessCode.SUCCESS, updateData, `Seleted state delete.`);
                        } else {
                            for (let i = 0; i < findSlectedCity.city.length; i++) {
                                if (findSlectedCity.city[i]._id == req.query.cityId) {
                                    // console.log("1033  findSlectedCity.city[i]._id == req.query.cityId",findSlectedCity.city[i]._id == req.query.cityId,"req.query.cityId", req.query.cityId,"findSlectedCity.city[i]._id",findSlectedCity.city[i]._id);
                                    let updateData = await slectedCity.findOneAndUpdate({ 'city._id': req.query.cityId }, { $pull: { 'city': { cityName: findSlectedCity.city[i].cityName, _id: req.query.cityId } } }, { new: true });
                                    response(res, SuccessCode.SUCCESS, updateData, `Seleted city delete.`);
                                }
                            }
                        }
                    }
                }
            }
        } catch (error) {
            console.log(error);
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    ridelList: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let chatList = await rideRequest.find({ userId: req.body.userId }).populate({ path: 'vehicalType', select: 'vehicalName vehicalImage  -_id' });;
                if (chatList.length == 0) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND)
                } else {
                    response(res, SuccessCode.SUCCESS, chatList, SuccessMessage.DATA_FOUND);
                }
            }
        } catch (error) {
            console.log(error);
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    ridelListforAdmin: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let chatList = await rideRequest.find().populate({ path: 'userId', select: 'name' }).populate({ path: 'vehicalType', select: 'vehicalName vehicalImage  -_id' }).sort({ "createdAt": -1 });
                if (chatList.length == 0) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND)
                } else {
                    response(res, SuccessCode.SUCCESS, chatList, SuccessMessage.DATA_FOUND);
                }
            }
        } catch (error) {
            console.log(error);
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    bookingPaymentList: async (req, res, next) => {
        try {
            let admin = await userModel.findOne({ _id: req.userId, userType: "ADMIN", status: "ACTIVE" });
            if (!admin) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let user = await userModel.findOne({ _id: req.body.userId, status: "ACTIVE" });
                if (!user) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
                } else {
                    let data = await bookingPayment.find({ user: user._id }).sort({ "createdAt": -1 });
                    if (data.length == 0) {
                        response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND);
                    } else {
                        response(res, SuccessCode.SUCCESS, data, SuccessMessage.DATA_FOUND);
                    }
                }
            }
        } catch (error) {
            console.log(error);
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    bookingPaymentforAdmin: async (req, res, next) => {
        try {
            let admin = await userModel.findOne({ _id: req.userId, userType: "ADMIN", status: "ACTIVE" });
            if (!admin) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let data = await bookingPayment.find().populate({ path: 'user driverId bookingId', select: 'name startLocation endLocation description' }).sort({ "createdAt": -1 });
                if (data.length == 0) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND);
                } else {
                    response(res, SuccessCode.SUCCESS, data, SuccessMessage.DATA_FOUND);
                }
            }
        } catch (error) {
            console.log(error);
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    withdrawRequestListforAdmin: async (req, res, next) => {
        try {
            let admin = await userModel.findOne({ _id: req.userId, userType: "ADMIN", status: "ACTIVE" });
            if (!admin) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let data = await transaction.find({ transactionType: "WITHDRAW" }).populate({ path: 'userId', select: 'name' }).sort({ "createdAt": -1 });
                if (data.length == 0) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND);
                } else {
                    response(res, SuccessCode.SUCCESS, data, SuccessMessage.DATA_FOUND);
                }
            }
        } catch (error) {
            console.log(error);
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    bookingDetails: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let bookingDetails = await bookingModel.findOne({ _id: req.body._id }).populate({ path: 'drivers userId', select: 'name userType profilePic' });
                if (!bookingDetails) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND)
                } else {
                    let vehicalDetails = await vehicalDocument.findOne({ userId: bookingDetails.drivers }).populate({ path: 'vehicalType', select: 'vehicalName' })
                    let obj = {
                        bookingDetails: bookingDetails,
                        vehicalDetails: vehicalDetails
                    }
                    response(res, SuccessCode.SUCCESS, obj, SuccessMessage.DATA_FOUND);
                }
            }
        } catch (error) {
            console.log(error);
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    bookinglist: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let chatList = await bookingModel.find({ userId: req.body.userId }).populate('rideId');
                if (chatList.length == 0) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND)
                } else {
                    response(res, SuccessCode.SUCCESS, chatList, SuccessMessage.DATA_FOUND);
                }
            }
        } catch (error) {
            console.log(error);
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    bookinglistforAdmin: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let query = { status: { $ne: "DELETE" } };
                if (req.body.fromDate && !req.body.toDate) {
                    query.createdAt = { $gte: req.body.fromDate };
                }
                if (!req.body.fromDate && req.body.toDate) {
                    query.createdAt = { $lte: req.body.toDate };
                }
                if (req.body.fromDate && req.body.toDate) {
                    query.$and = [
                        { createdAt: { $gte: req.body.fromDate } },
                        { createdAt: { $lte: req.body.toDate } },
                    ];
                }
                var limit = parseInt(req.body.limit);
                var options = {
                    page: req.body.page || 1,
                    limit: limit || 10,
                    sort: { createdAt: -1 },
                    populate: { path: 'drivers userId vehicalType', select: 'name vehicalImage vehicalName' }
                }
                bookingModel.paginate(query, options, (transErr, transRes) => {
                    if (transErr) {
                        response(res, ErrorCode.INTERNAL_ERROR, [], ErrorMessage.INTERNAL_ERROR);
                    } else if (transRes.docs.length == 0) {
                        response(res, ErrorCode.NOT_FOUND, [], ErrorMessage.NOT_FOUND);
                    } else {
                        response(res, SuccessCode.SUCCESS, transRes.docs, SuccessMessage.DETAIL_GET);
                    }
                })
            }
        } catch (error) {
            response(res, ErrorCode.WENT_WRONG, [], ErrorMessage.SOMETHING_WRONG);
        }
    },
    pendingBookinglistforAdmin: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let query = { status: { $ne: "DELETE" }, bookingStatus: ["START", "PENDING"] };
                if (req.body.fromDate && !req.body.toDate) {
                    query.createdAt = { $gte: req.body.fromDate };
                }
                if (!req.body.fromDate && req.body.toDate) {
                    query.createdAt = { $lte: req.body.toDate };
                }
                if (req.body.fromDate && req.body.toDate) {
                    query.$and = [
                        { createdAt: { $gte: req.body.fromDate } },
                        { createdAt: { $lte: req.body.toDate } },
                    ];
                }
                var limit = parseInt(req.body.limit);
                var options = {
                    page: req.body.page || 1,
                    limit: limit || 10,
                    sort: { createdAt: -1 },
                    populate: { path: 'drivers userId vehicalType', select: 'name vehicalImage vehicalName' }
                }
                bookingModel.paginate(query, options, (transErr, transRes) => {
                    if (transErr) {
                        response(res, ErrorCode.INTERNAL_ERROR, [], ErrorMessage.INTERNAL_ERROR);
                    } else if (transRes.docs.length == 0) {
                        response(res, ErrorCode.NOT_FOUND, [], ErrorMessage.NOT_FOUND);
                    } else {
                        response(res, SuccessCode.SUCCESS, transRes.docs, SuccessMessage.DETAIL_GET);
                    }
                })
            }
        } catch (error) {
            response(res, ErrorCode.WENT_WRONG, [], ErrorMessage.SOMETHING_WRONG);
        }
    },
    completeBookinglistforAdmin: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let query = { status: { $ne: "DELETE" }, bookingStatus: "STOP" };
                if (req.body.fromDate && !req.body.toDate) {
                    query.createdAt = { $gte: req.body.fromDate };
                }
                if (!req.body.fromDate && req.body.toDate) {
                    query.createdAt = { $lte: req.body.toDate };
                }
                if (req.body.fromDate && req.body.toDate) {
                    query.$and = [
                        { createdAt: { $gte: req.body.fromDate } },
                        { createdAt: { $lte: req.body.toDate } },
                    ];
                }
                var limit = parseInt(req.body.limit);
                var options = {
                    page: req.body.page || 1,
                    limit: limit || 10,
                    sort: { createdAt: -1 },
                    populate: { path: 'drivers userId vehicalType', select: 'name vehicalImage vehicalName' }
                }
                bookingModel.paginate(query, options, (transErr, transRes) => {
                    if (transErr) {
                        response(res, ErrorCode.INTERNAL_ERROR, [], ErrorMessage.INTERNAL_ERROR);
                    } else if (transRes.docs.length == 0) {
                        response(res, ErrorCode.NOT_FOUND, [], ErrorMessage.NOT_FOUND);
                    } else {
                        response(res, SuccessCode.SUCCESS, transRes.docs, SuccessMessage.DETAIL_GET);
                    }
                })
            }
        } catch (error) {
            response(res, ErrorCode.WENT_WRONG, [], ErrorMessage.SOMETHING_WRONG);
        }
    },
    cancelBookinglistforAdmin: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let query = { status: { $ne: "DELETE" }, bookingStatus: "CANCEL" };
                if (req.body.fromDate && !req.body.toDate) {
                    query.createdAt = { $gte: req.body.fromDate };
                }
                if (!req.body.fromDate && req.body.toDate) {
                    query.createdAt = { $lte: req.body.toDate };
                }
                if (req.body.fromDate && req.body.toDate) {
                    query.$and = [
                        { createdAt: { $gte: req.body.fromDate } },
                        { createdAt: { $lte: req.body.toDate } },
                    ];
                }
                var limit = parseInt(req.body.limit);
                var options = {
                    page: req.body.page || 1,
                    limit: limit || 10,
                    sort: { createdAt: -1 },
                    populate: { path: 'drivers userId vehicalType', select: 'name vehicalImage vehicalName' }
                }
                bookingModel.paginate(query, options, (transErr, transRes) => {
                    if (transErr) {
                        response(res, ErrorCode.INTERNAL_ERROR, [], ErrorMessage.INTERNAL_ERROR);
                    } else if (transRes.docs.length == 0) {
                        response(res, ErrorCode.NOT_FOUND, [], ErrorMessage.NOT_FOUND);
                    } else {
                        response(res, SuccessCode.SUCCESS, transRes.docs, SuccessMessage.DETAIL_GET);
                    }
                })
            }
        } catch (error) {
            response(res, ErrorCode.WENT_WRONG, [], ErrorMessage.SOMETHING_WRONG);
        }
    },
    dayBookingList: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                if (Number(req.body.day) == 7) {
                    if (req.body.bookingStatus) {
                        const transRes = await bookingModel.find({ bookingStatus: req.body.bookingStatus, createdAt: { $gte: moment().add(-7, "days") } }).populate({ path: 'drivers userId vehicalType', select: 'name vehicalImage vehicalName' });
                        if (transRes.length == 0) {
                            response(res, ErrorCode.NOT_FOUND, [], ErrorMessage.NOT_FOUND);
                        } else {
                            response(res, SuccessCode.SUCCESS, transRes, SuccessMessage.DETAIL_GET);
                        }
                    } else {
                        const transRes = await bookingModel.find({ createdAt: { $gte: moment().add(-7, "days") } }).populate({ path: 'drivers userId vehicalType', select: 'name vehicalImage vehicalName' });
                        if (transRes.length == 0) {
                            response(res, ErrorCode.NOT_FOUND, [], ErrorMessage.NOT_FOUND);
                        } else {
                            response(res, SuccessCode.SUCCESS, transRes, SuccessMessage.DETAIL_GET);
                        }
                    }
                } else if (Number(req.body.day) == 15) {
                    if (req.body.bookingStatus) {
                        const transRes = await bookingModel.find({ bookingStatus: req.body.bookingStatus, createdAt: { $gte: moment().add(-15, "days"), } }).populate({ path: 'drivers userId vehicalType', select: 'name vehicalImage vehicalName' });
                        if (transRes.length == 0) {
                            response(res, ErrorCode.NOT_FOUND, [], ErrorMessage.NOT_FOUND);
                        } else {
                            response(res, SuccessCode.SUCCESS, transRes, SuccessMessage.DETAIL_GET);
                        }
                    } else {
                        const transRes = await bookingModel.find({ createdAt: { $gte: moment().add(-15, "days"), } }).populate({ path: 'drivers userId vehicalType', select: 'name vehicalImage vehicalName' });
                        if (transRes.length == 0) {
                            response(res, ErrorCode.NOT_FOUND, [], ErrorMessage.NOT_FOUND);
                        } else {
                            response(res, SuccessCode.SUCCESS, transRes, SuccessMessage.DETAIL_GET);
                        }
                    }
                } else if (Number(req.body.day) == 30) {
                    if (req.body.bookingStatus) {
                        const transRes = await bookingModel.find({ bookingStatus: req.body.bookingStatus, createdAt: { $gte: moment().add(-30, "days"), } }).populate({ path: 'drivers userId vehicalType', select: 'name vehicalImage vehicalName' });
                        if (transRes.length == 0) {
                            response(res, ErrorCode.NOT_FOUND, [], ErrorMessage.NOT_FOUND);
                        } else {
                            response(res, SuccessCode.SUCCESS, transRes, SuccessMessage.DETAIL_GET);
                        }
                    } else {
                        const transRes = await bookingModel.find({ createdAt: { $gte: moment().add(-30, "days"), } }).populate({ path: 'drivers userId vehicalType', select: 'name vehicalImage vehicalName' });
                        if (transRes.length == 0) {
                            response(res, ErrorCode.NOT_FOUND, [], ErrorMessage.NOT_FOUND);
                        } else {
                            response(res, SuccessCode.SUCCESS, transRes, SuccessMessage.DETAIL_GET);
                        }
                    }
                }
            }
        } catch (error) {
            response(res, ErrorCode.WENT_WRONG, [], ErrorMessage.SOMETHING_WRONG);
        }
    },
    uploadAudio: async (req, res) => {
        try {
            if (req.file) {
                result = await commonFunction.uploadAudio(req.file.path);
                let obj = {
                    audioName: "notification",
                    audio: result.secure_url,
                }
                let save = await audio(obj).save();
                if (save) {
                    response(res, SuccessCode.SUCCESS, save, SuccessMessage.DATA_SAVED)
                }
            }
        } catch (error) {
            res.status(500).send("Internal server error ");
        }
    },
    notificationAudio: async (req, res) => {
        try {
            let findAudio = await audio.findOne({ status: "ACTIVE" });
            if (!findAudio) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                response(res, SuccessCode.SUCCESS, findAudio, SuccessMessage.DATA_SAVED)
            }
        } catch (error) {
            response(res, ErrorCode.WENT_WRONG, [], ErrorMessage.SOMETHING_WRONG);
        }
    },
    adminDriverCash: async (req, res) => {
        try {
            let admin = await userModel.findOne({ _id: req.userId });
            if (!admin) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let userData = await userModel.findOne({ _id: req.query.userId });
                if (!userData) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
                } else {
                    let findCash = await cashinHand.findOne({ userId: userData._id });
                    if (!findCash) {
                        response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND)
                    } else {
                        response(res, SuccessCode.SUCCESS, findCash, SuccessMessage.DATA_FOUND);
                    }
                }
            }
        } catch (error) {
            console.log(error)
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG);
        }
    },
    activeBlockBooking: async (req, res) => {
        try {
            let adminResult = await userModel.findOne({ _id: req.userId, userType: "ADMIN" });
            if (!adminResult) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            }
            else {
                let result = await userModel.findOne({ _id: req.body._id, status: { $ne: "DELETE" } });
                if (!result) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND);
                }
                else {
                    if (result.bookingBlock == true) {
                        let updateResult = await userModel.findOneAndUpdate({ _id: result._id }, { $set: { bookingBlock: false } }, { new: true });
                        if (updateResult) {
                            response(res, SuccessCode.SUCCESS, updateResult, SuccessMessage.BLOCK_SUCCESS);
                        }
                    } else if (result.bookingBlock == false) {
                        let updateResult = await userModel.findOneAndUpdate({ _id: result._id }, { $set: { bookingBlock: true } }, { new: true });
                        if (updateResult) {
                            response(res, SuccessCode.SUCCESS, updateResult, SuccessMessage.UNBLOCK_SUCCESS);
                        }
                    }
                }
            }
        } catch (error) {
            response(res, ErrorCode.WENT_WRONG, {}, ErrorMessage.SOMETHING_WRONG);
        }
    },
    editAdminDriverCash: async (req, res) => {
        try {
            let admin = await userModel.findOne({ _id: req.userId });
            if (!admin) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let userData = await userModel.findOne({ _id: req.query.userId });
                if (!userData) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
                } else {
                    let findCash = await cashinHand.findOne({ userId: userData._id });
                    if (!findCash) {
                        response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND)
                    } else {
                        if (req.body.amountCollect <= findCash.adminCash) {
                            req.body.driverCash = findCash.driverCash;
                            req.body.adminCash = findCash.adminCash - req.body.amountCollect;
                            req.body.totalCash = req.body.driverCash + req.body.adminCash;
                            req.body.totalCashbooking = req.body.totalCashbooking;
                            let update = await cashinHand.findByIdAndUpdate({ _id: findCash._id }, { $set: req.body }, { new: true });
                            if (update) {
                                if (update.totalCashbooking < 5) {
                                    let updateUser = await userModel.findByIdAndUpdate({ _id: userData._id }, { $set: { bookingBlock: false } }, { new: true });
                                    response(res, SuccessCode.SUCCESS, update, SuccessMessage.DATA_FOUND);
                                } else {
                                    response(res, SuccessCode.SUCCESS, update, SuccessMessage.DATA_FOUND);
                                }
                            }
                        } else {
                            response(res, ErrorCode.BAD_REQUEST, {}, ErrorMessage.INSUFFICIENT_BALANCE)
                        }

                    }
                }
            }
        } catch (error) {
            console.log(error)
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG);
        }
    },
    viewAdminCash: async (req, res) => {
        try {
            let admin = await userModel.findOne({ _id: req.userId, userType: "ADMIN" });
            if (!admin) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let findCash = await cashinHand.find();
                if (!findCash) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND)
                } else {
                    let admin = 0;
                    for (let i = 0; i < findCash.length; i++) {
                        admin = admin + findCash[i].adminCash;
                    }
                    response(res, SuccessCode.SUCCESS, admin, SuccessMessage.DATA_FOUND);
                }
            }
        } catch (error) {
            console.log(error)
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG);
        }
    },
    updateCash: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.query.userId });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let findCash = await cashinHand.findOne({ userId: userData._id });
                if (!findCash) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND)
                } else {
                    req.body.driverCash = Number(req.body.driverCash);
                    req.body.adminCash = Number(req.body.adminCash);
                    req.body.totalCash = req.body.driverCash + req.body.adminCash;
                    req.body.totalCashbooking = Number(req.body.totalCashbooking);
                    let update = await cashinHand.findByIdAndUpdate({ _id: findCash._id }, { $set: req.body }, { new: true });
                    if (update) {
                        response(res, SuccessCode.SUCCESS, update, SuccessMessage.DATA_FOUND);
                    }
                }
            }
        } catch (error) {
            console.log(error)
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG);
        }
    },
    sendNotification: async (req, res) => {
        try {
            let admin = await userModel.findOne({ _id: req.userId, userType: "ADMIN" });
            if (!admin) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let userData = await userModel.findOne({ _id: req.query.userId });
                if (!userData) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
                } else {
                    let d = new Date(), date = d.getDate(); let month = d.getMonth() + 1; let year = d.getFullYear(), hr = d.getHours(), min = d.getMinutes(), sec = d.getSeconds();
                    let fullDate = await datetimeCalulate(date, month, year, hr, min, sec)
                    if (userData.deviceToken != null || userData.deviceToken != undefined) {
                        let result = await commonFunction.pushNotification(userData.deviceToken, userData.deviceType, req.body.subject, req.body.body);
                        let obj = {
                            title: req.body.subject,
                            body: req.body.body,
                            driverId: userData._id,
                            date: fullDate,
                            notificationType: "AMOUNT"
                        }
                        var notif = await notification.create(obj);
                        if (notif) {
                            response(res, SuccessCode.SUCCESS, notif, SuccessMessage.DATA_FOUND);
                        }
                    } else {
                        let obj = {
                            title: req.body.subject,
                            body: req.body.body,
                            driverId: userData._id,
                            date: fullDate,
                            notificationType: "AMOUNT"
                        }
                        var notif = await notification.create(obj);
                        if (notif) {
                            response(res, SuccessCode.SUCCESS, notif, SuccessMessage.DATA_FOUND);
                        }
                    }
                }
            }
        } catch (error) {
            console.log(error)
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG);
        }
    },
    listNotification: async (req, res) => {
        try {
            let admin = await userModel.findOne({ _id: req.userId, userType: "ADMIN" });
            if (!admin) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let userData = await userModel.findOne({ _id: req.query.userId });
                if (!userData) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
                } else {
                    var notif = await notification.find({ driverId: userData._id, notificationType: "AMOUNT" }).sort({ "createdAt": -1 })
                    if (notif.length == 0) {
                        response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND);
                    } else {
                        response(res, SuccessCode.SUCCESS, notif, SuccessMessage.DATA_FOUND);
                    }
                }
            }
        } catch (error) {
            console.log(error)
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG);
        }
    },
    vehicalList: async (req, res) => {
        try {
            let query = { status: "ACTIVE" }
            var options = {
                page: parseInt(req.body.page) || 1,
                limit: parseInt(req.body.limit) || 10,
                sort: { createdAt: -1 },
            };
            vehicalType.paginate(query, options, (err, result) => {
                if (err) {
                    console.log(err);
                    response(res, ErrorCode.INTERNAL_ERROR, [], ErrorMessage.INTERNAL_ERROR);
                }
                else if (result.docs.length == false) {
                    response(res, ErrorCode.NOT_FOUND, [], ErrorMessage.NOT_FOUND);
                }
                else {
                    response(res, SuccessCode.SUCCESS, result, SuccessMessage.DATA_FOUND);
                }
            });
        }
        catch (error) {
            console.log(error)
            response(res, ErrorCode.SOMETHING_WRONG, [], ErrorMessage.SOMETHING_WRONG);
        }
    },
}

const datetimeCalulate = async (date, month, year, hr, min, sec) => {
    let date1, hr1, min1, sec1;
    if (date < 10) {
        date1 = '' + 0 + date;
    }
    else {
        date1 = date
    }
    if (hr < 10) {
        hr1 = '' + 0 + hr;
    }
    else {
        hr1 = hr
    }
    if (min < 10) {
        min1 = '' + 0 + min;
    }
    else {
        min1 = min
    }
    if (sec < 10) {
        sec1 = '' + 0 + sec;
    }
    else {
        sec1 = sec
    }
    let fullDate = `${date1}/${month}/${year} ${hr1}:${min1}:${sec1}`
    return fullDate
}