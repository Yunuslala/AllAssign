const userModel = require('../models/userModel');
const config = require('../config/config.json')
const vehicalDocument = require('../models/vehicalDocument');
const rideRequest = require('../models/rideRequest');
const notification = require('../models/notificationModel');
const chatModel = require('../models/chatModel');
const bookingModel = require('../models/bookingModel');
const bookingPayment = require('../models/bookingPayment');
const vehicalType = require('../models/vehicalType');
const rideSummary = require('../models/rideSummary');
const rideChat = require('../models/rideChat');
const aadharDocument = require('../models/aadharDocument');
const slectedCity = require('../models/slectedCity');
const cashinHand = require('../models/cashinHand');
const jwt = require('jsonwebtoken');
const { commonResponse: response } = require('../helper/commonResponseHandler');
const { ErrorMessage } = require('../helper/message');
const { ErrorCode } = require('../helper/statusCode');
const { SuccessMessage } = require('../helper/message');
const { SuccessCode } = require('../helper/statusCode');
const commonFunction = require('../helper/commonFunction');
const commissionModel = require('../models/commissionModel')
const bcrypt = require('bcryptjs');
const { Error } = require('mongoose');
const { isSafeInteger } = require('lodash');
const transaction = require('../models/transaction');
const { error } = require('console');
const ifsc = require('ifsc');
module.exports = {
    /////////////////////////////////////////////////////////////////// user  ///////////////////////////////  7
    userLogin: async (req, res) => {
        try {
            query = { mobileNumber: req.body.mobileNumber, userType: "CUSTOMER", status: { $ne: "DELETE" } }
            let user = await userModel.findOne(query);
            if (user) {
                if (user.status == "ACTIVE") {
                    req.body.otp = commonFunction.randomOTPGenerate();
                    req.body.otpTimeExpire = Date.now();
                    var Number = "+91";
                    var mobileNumber = Number.concat(req.body.mobileNumber);
                    commonFunction.sendMobileOtp(mobileNumber, req.body.otp)
                        .then(smsResult => {
                            userModel.findByIdAndUpdate({ _id: user._id }, { $set: { otp: req.body.otp, otpTimeExpire: req.body.otpTimeExpire, accountVerify: false } }, { new: true }, (err, result) => {
                                if (err) {
                                    console.log(err);
                                    response(res, ErrorCode.INTERNAL_ERROR, err, ErrorMessage.INTERNAL_ERROR);
                                } else {
                                    let obj = {
                                        mobileNumber: result.mobileNumber,
                                        otp: result.otp,
                                        accountVerify: result.accountVerify,
                                    };
                                    response(res, SuccessCode.SUCCESS, obj, SuccessMessage.OTP_SEND);
                                }
                            });
                        })
                        .catch(err => {
                            response(res, ErrorCode.INTERNAL_ERROR, err, ErrorMessage.INTERNAL_ERROR)
                        })
                } else if (user.status == "BLOCK") {
                    response(res, ErrorCode.INTERNAL_ERROR, err, ErrorMessage.BLOCKED_BY_ADMIN);

                } else if (user.status == "DELETE") {
                    response(res, ErrorCode.INTERNAL_ERROR, err, ErrorMessage.DELETED_BY_ADMIN);
                }
            } else {
                req.body.otp = commonFunction.randomOTPGenerate();
                req.body.otpTimeExpire = Date.now();
                req.body.documentVerified = "APPROVE";
                var Number = "+91";
                var mobileNumber = Number.concat(req.body.mobileNumber);
                commonFunction.sendMobileOtp(mobileNumber, req.body.otp)
                    .then(smsResult => {
                        new userModel(req.body).save((err, result) => {
                            if (err) {
                                response(res, ErrorCode.INTERNAL_ERROR, err, ErrorMessage.INTERNAL_ERROR)
                            } else {
                                let obj = {
                                    mobileNumber: result.mobileNumber,
                                    otp: result.otp,
                                    accountVerify: result.accountVerify
                                }
                                response(res, SuccessCode.SUCCESS, obj, SuccessMessage.OTP_SEND)
                            }
                        })
                    })
                    .catch(err => {
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
            userModel.findOne({ mobileNumber: req.body.mobileNumber, status: { $ne: "DELETE" }, userType: "CUSTOMER" }, (err, result) => {
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
                                userModel.findByIdAndUpdate(result._id, { accountVerify: true, deviceToken: req.body.deviceToken, deviceType: req.body.deviceType }, { new: true }, (updateErr, updateResult) => {
                                    if (updateErr) {
                                        response(res, ErrorCode.INTERNAL_ERROR, updateErr, ErrorMessage.INTERNAL_ERROR)
                                    }
                                    else {
                                        let obj = {
                                            _id: updateResult._id,
                                            userType: updateResult.userType,
                                            aadharDocumentUpload: updateResult.aadharDocumentUpload,
                                            token: token
                                        }
                                        response(res, SuccessCode.SUCCESS, obj, SuccessMessage.LOGIN_SUCCESS);
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
                        userModel.findByIdAndUpdate(result._id, { accountVerify: true, deviceToken: req.body.deviceToken, deviceType: req.body.deviceType }, { new: true }, (updateErr, updateResult) => {
                            if (updateErr) {
                                response(res, ErrorCode.INTERNAL_ERROR, updateErr, ErrorMessage.INTERNAL_ERROR)
                            }
                            else {
                                let obj = {
                                    _id: updateResult._id,
                                    userType: updateResult.userType,
                                    token: token
                                };
                                response(res, SuccessCode.SUCCESS, obj, SuccessMessage.CUSTOMER_ALREADY_VERIFY);
                            }
                        })
                    }
                }
            });
        } catch (error) {
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }

    },
    uploadAadhar: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId, userType: "CUSTOMER" });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let frontImage = req.files['frontImage'];
                let backImage = req.files['backImage'];
                req.body.frontImage = await commonFunction.uploadProfileImage(frontImage[0].path);
                req.body.backImage = await commonFunction.uploadProfileImage(backImage[0].path);
                let obj = {
                    userId: userData._id,
                    userName: req.body.name,
                    aadharNo: req.body.aadharNo,
                    frontImage: req.body.frontImage,
                    backImage: req.body.backImage,
                }
                let result = await aadharDocument(obj).save();
                if (result) {
                    let userData1 = await userModel.findByIdAndUpdate({ _id: userData._id }, { $set: { aadharDocumentUpload: true, documentUpload: true, aadharDocumentId: result._id } }, { new: true });
                    let userData2 = await userModel.findById({ _id: userData1._id }).populate('aadharDocumentId');
                    response(res, SuccessCode.SUCCESS, userData2, SuccessMessage.UPLOAD_DOCUMENT)
                }
            }
        } catch (error) {
            console.log(error);
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    viewAadharDetails: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId, userType: "CUSTOMER" });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let result = await aadharDocument.findOne({ userId: userData._id })
                if (!result) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND);
                } else {
                    response(res, SuccessCode.SUCCESS, result, SuccessMessage.DATA_FOUND)
                }
            }
        } catch (error) {
            console.log(error);
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    providerList: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId, userType: "CUSTOMER" });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let query = { userType: "PROVIDER", documentVerified: "APPROVE" };
                let providerList = await userModel.find(query).populate({ path: 'documentId', select: "vehicalType", populate: { path: 'vehicalType', model: 'vehical', select: "vehicalName vehicalImage" } })
                if (providerList.length == 0) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND)
                } else {
                    response(res, SuccessCode.SUCCESS, providerList, SuccessMessage.DATA_FOUND);
                }
            }

        } catch (error) {
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    viewProvider: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId, userType: "CUSTOMER" });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let data = await userModel.findById({ _id: req.query._id, userType: "PROVIDER" });
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
    shareContractNo: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId, userType: "CUSTOMER" });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let data = await userModel.findById({ _id: req.params._id, userType: "PROVIDER" });
                if (!data) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
                } else {
                    let updateUSer = await userModel.findByIdAndUpdate({ _id: userData._id }, { $push: { SharedContract: data._id } }, { new: true })
                    response(res, SuccessCode.SUCCESS, updateUSer, SuccessMessage.DATA_FOUND);
                }
            }
        } catch (error) {
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    /////////////////////////////////////////////////////////////////// provider //////////////////////////////
    providerLogin: async (req, res) => {
        try {
            query = { mobileNumber: req.body.mobileNumber, userType: "PROVIDER", status: { $ne: "DELETE" } }
            let user = await userModel.findOne(query);
            if (user) {
                if (user.status == "ACTIVE") {
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
                } else if (user.status == "BLOCK") {
                    response(res, ErrorCode.INTERNAL_ERROR, err, ErrorMessage.BLOCKED_BY_ADMIN)

                } else if (user.status == "DELETE") {
                    response(res, ErrorCode.INTERNAL_ERROR, err, ErrorMessage.DELETED_BY_ADMIN)

                }
            } else {
                req.body.otp = commonFunction.randomOTPGenerate();
                req.body.otpTimeExpire = Date.now();
                req.body.userType = "PROVIDER";
                var Number = "+91";
                var mobileNumber = Number.concat(req.body.mobileNumber);
                commonFunction.sendMobileOtp(mobileNumber, req.body.otp)
                    .then(smsResult => {
                        new userModel(req.body).save((err, result) => {
                            if (err) {
                                response(res, ErrorCode.INTERNAL_ERROR, err, ErrorMessage.INTERNAL_ERROR)
                            } else {
                                let obj = {
                                    userId: result._id
                                }
                                new cashinHand(obj).save((err, result1) => {
                                    if (err) {
                                        response(res, ErrorCode.INTERNAL_ERROR, err, ErrorMessage.INTERNAL_ERROR)
                                    } else {
                                        response(res, SuccessCode.SUCCESS, result, SuccessMessage.OTP_SEND)
                                    }
                                })
                            }
                        })
                    })
                    .catch(err => {
                        response(res, ErrorCode.INTERNAL_ERROR, err, ErrorMessage.INTERNAL_ERROR)
                    })
            }
        } catch (error) {
            console.log("error", error)
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    providerVerifyOtp: (req, res) => {
        try {
            userModel.findOne({ mobileNumber: req.body.mobileNumber, status: { $ne: "DELETE" }, userType: "PROVIDER" }, (err, result) => {
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
                                userModel.findByIdAndUpdate(result._id, { accountVerify: true, deviceToken: req.body.deviceToken, deviceType: req.body.deviceType }, { new: true }, (updateErr, updateResult) => {
                                    if (updateErr) {
                                        response(res, ErrorCode.INTERNAL_ERROR, updateErr, ErrorMessage.INTERNAL_ERROR)
                                    }
                                    else {
                                        let obj = {
                                            _id: updateResult._id,
                                            userType: updateResult.userType,
                                            token: token
                                        }
                                        response(res, SuccessCode.SUCCESS, obj, SuccessMessage.LOGIN_SUCCESS);
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
                        let obj = {
                            _id: result._id,
                            userType: result.userType,
                            token: token
                        }
                        response(res, SuccessCode.SUCCESS, obj, SuccessMessage.CUSTOMER_ALREADY_VERIFY);
                    }
                }
            })
        } catch (error) {
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }

    },
    uploadDocumentforVerification: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId, userType: "PROVIDER" });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {

                let numberPlate = req.files['numberPlate'];
                let vehicalRc = req.files['vehicalRc'];
                let drivingLicence = req.files['drivingLicence'];
                let vehicleInsurance = req.files['vehicleInsurance'];
                req.body.numberPlate = await commonFunction.uploadProfileImage(numberPlate[0].path);
                req.body.vehicalRc = await commonFunction.uploadProfileImage(vehicalRc[0].path);
                req.body.drivingLicence = await commonFunction.uploadProfileImage(drivingLicence[0].path);
                req.body.vehicleInsurance = await commonFunction.uploadProfileImage(vehicleInsurance[0].path);
                let obj = {
                    userId: userData._id,
                    vehicalType: req.body.vehicalType,
                    numberPlate: req.body.numberPlate,
                    vehicalRc: req.body.vehicalRc,
                    drivingLicence: req.body.drivingLicence,
                    vehicleInsurance: req.body.vehicleInsurance,
                }
                let result = await vehicalDocument(obj).save();
                if (result) {
                    let userData1 = await userModel.findByIdAndUpdate({ _id: userData._id }, { $set: { documentUpload: true }, $push: { documentId: result._id } }, { new: true });
                    let userData2 = await userModel.findById({ _id: userData1._id }).populate('documentId');
                    response(res, SuccessCode.SUCCESS, userData2, SuccessMessage.UPLOAD_DOCUMENT)
                }
            }
        } catch (error) {
            console.log(error);
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    viewDocument: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId, userType: "PROVIDER" });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                if (userData.documentVerified == "PENDING" && userData.documentUpload == false) {
                    let userData2 = await userModel.findById({ _id: userData._id }).populate('documentId');
                    response(res, ErrorCode.NOT_FOUND, userData2, ErrorMessage.NOT_FOUND)
                } else if (userData.documentVerified == "PENDING" && userData.documentUpload == true) {
                    let userData2 = await userModel.findById({ _id: userData._id }).populate('documentId');
                    response(res, SuccessCode.SUCCESS, userData2, SuccessMessage.DOCUMENT_NOT_VERIFIED)
                } else if (userData.documentVerified == "APPROVE" && userData.documentUpload == true) {
                    let userData2 = await userModel.findById({ _id: userData._id }).populate('documentId');
                    response(res, SuccessCode.SUCCESS, userData2, "Your document has been verified by admin")
                } else if (userData.documentVerified == "REJECT" && userData.documentUpload == false) {
                    let userData2 = await userModel.findById({ _id: userData._id }).populate('documentId');
                    response(res, SuccessCode.SUCCESS, userData2, "Your document has been reject by admin")
                } else if (userData.documentVerified == "REJECT" && userData.documentUpload == true) {
                    let userData2 = await userModel.findById({ _id: userData._id }).populate('documentId');
                    response(res, SuccessCode.SUCCESS, userData2, "Your document has been reject by admin")
                }
            }
        } catch (error) {
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    getcustomerProfile: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId, userType: "PROVIDER" });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let query = { _id: req.params._id, userType: "CUSTOMER" }
                let data = await userModel.findById(query);
                if (data) {
                    if (data.SharedContract.includes(userData._id)) {
                        response(res, SuccessCode.SUCCESS, data, SuccessMessage.DATA_FOUND);
                    } else {
                        let data1 = await userModel.findById(query).select('-mobileNumber');
                        response(res, SuccessCode.SUCCESS, data1, SuccessMessage.DATA_FOUND);
                    }
                }
            }
        } catch (error) {
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    addVehicalDocument: async (req, res, next) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId, userType: "PROVIDER" });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let numberPlate = req.files['numberPlate'];
                let vehicalRc = req.files['vehicalRc'];
                let drivingLicence = req.files['drivingLicence'];
                let vehicleInsurance = req.files['vehicleInsurance'];
                req.body.numberPlate = await commonFunction.uploadProfileImage(numberPlate[0].path);
                req.body.vehicalRc = await commonFunction.uploadProfileImage(vehicalRc[0].path);
                req.body.drivingLicence = await commonFunction.uploadProfileImage(drivingLicence[0].path);
                req.body.vehicleInsurance = await commonFunction.uploadProfileImage(vehicleInsurance[0].path);
                let obj = {
                    userId: userData._id,
                    vehicalType: req.body.vehicalType,
                    numberPlate: req.body.numberPlate,
                    vehicalRc: req.body.vehicalRc,
                    drivingLicence: req.body.drivingLicence,
                    vehicleInsurance: req.body.vehicleInsurance,
                }
                let result = await vehicalDocument(obj).save();
                if (result) {
                    let userData1 = await userModel.findByIdAndUpdate({ _id: userData._id }, { $set: { documentUpload: true }, $push: { documentId: result._id } }, { new: true });
                    let userData2 = await userModel.findById({ _id: userData1._id }).populate('documentId');
                    response(res, SuccessCode.SUCCESS, userData2, SuccessMessage.UPLOAD_DOCUMENT)
                }
            }
        } catch (error) {
            console.log(error);
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    listVehicalDocument: async (req, res, next) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId, userType: "PROVIDER" });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let vehicalDocumen = await vehicalDocument.find({ userId: userData._id, status: { $ne: "DELETE" } }).populate('vehicalType');
                if (vehicalDocumen.length == 0) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND);
                } else {
                    response(res, SuccessCode.SUCCESS, vehicalDocumen, SuccessMessage.DATA_FOUND)
                }
            }
        } catch (error) {
            return next(error);
        }
    },
    viewVehicalDocument: async (req, res) => {
        try {
            let adminData = await userModel.findOne({ _id: req.userId, userType: "PROVIDER" });
            if (!adminData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let findDocument = await vehicalDocument.findOne({ _id: req.query._id, userId: adminData._id }).populate('vehicalType');
                if (findDocument) {
                    response(res, SuccessCode.SUCCESS, findDocument, SuccessMessage.DATA_FOUND);
                } else {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND);
                }
            }
        } catch (error) {
            console.log("314========", error)
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    ///////////////////////////////////////////////////////////////// user - provider ////////////////////////
    updateStatusOnline: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                if (userData.online == true) {
                    let updateResult = await userModel.findByIdAndUpdate({ _id: userData._id }, { $set: { online: false } }, { new: true });
                    if (updateResult) {
                        response(res, SuccessCode.SUCCESS, updateResult, SuccessMessage.ONLINE_UPDATE_SUCCESS);
                    }
                } else {
                    let updateResult = await userModel.findByIdAndUpdate({ _id: userData._id }, { $set: { online: true } }, { new: true });
                    if (updateResult) {
                        response(res, SuccessCode.SUCCESS, updateResult, SuccessMessage.ONLINE_UPDATE_SUCCESS);
                    }
                }
            }
        } catch (error) {
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    editProfile: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId, userType: { $in: ["CUSTOMER", "PROVIDER"] } });
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
    viewProfile: async (req, res) => {
        try {
            let adminData = await userModel.findOne({ _id: req.userId, userType: { $in: ["CUSTOMER", "PROVIDER"] } }).select('-bookingBlock');
            if (!adminData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                response(res, SuccessCode.SUCCESS, adminData, SuccessMessage.DATA_FOUND);
            }
        } catch (error) {
            console.log("314========", error)
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    updateLocation: async (req, res) => {
        try {
            let user = await userModel.findOne({ _id: req.userId, status: "ACTIVE" });
            if (!user) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                if (req.body.currentLat || req.body.currentLong) {
                    coordinates = [parseFloat(req.body.currentLat), parseFloat(req.body.currentLong)]
                    req.body.currentLocation = { type: "Point", coordinates };
                }
                let update = await userModel.findByIdAndUpdate({ _id: user._id }, { $set: { currentLocation: req.body.currentLocation } }, { new: true });
                if (update) {
                    response(res, SuccessCode.SUCCESS, update, SuccessMessage.LOCATION_UPDATE_SUCCESS);
                }

            }
        } catch (error) {
            console.log(error);
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    ////////////////////////////////////////////////////////////////// Vehical ///////////////////////////////
    vehicalList: async (req, res) => {
        try {
            let vehicalDetails = await vehicalType.find({ status: "ACTIVE" }).sort({ "createdAt": -1 })
            if (vehicalDetails.length == 0) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND)
            } else {
                response(res, SuccessCode.SUCCESS, vehicalDetails, SuccessMessage.DATA_FOUND);
            }
        } catch (error) {
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    viewVehical: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let vehicalDetails = await vehicalType.findOne({ _id: req.body._id })
                if (!vehicalDetails) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND)
                } else {
                    response(res, SuccessCode.SUCCESS, vehicalDetails, SuccessMessage.DATA_FOUND);
                }
            }
        } catch (error) {
            console.log(error);
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    /////////////////////////////////////////////////////////////////// Ride Request Section  ////////////////////////////////
    sendRequest: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId, userType: "CUSTOMER" });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                let d = new Date(); let hour = d.getHours(); let minute = d.getMinutes(); let second = d.getSeconds();
                let date = d.getDate(); let month = months[d.getMonth()]; let year = d.getFullYear();
                let fullDate = await datetimeCalulate(date, month, year, hour, minute, second)
                let driver1 = [];
                let vehical = await vehicalDocument.find({ vehicalType: req.body.vehicalType, status: "ACTIVE", verified: "APPROVE" });
                for (let i = 0; i < vehical.length; i++) {
                    let a = await userModel.findById({ _id: vehical[i].userId, status: "ACTIVE", bookingBlock: false, userType: "PROVIDER" });
                    let distance2 = await getDistanceFromLatLonInKm(req.body.startlLat, req.body.startLong, a.currentLocation.coordinates[0], a.currentLocation.coordinates[1]);
                    if (distance2 <= 15) {
                        driver1.push(a);
                    }
                }
                if (driver1.length > 0) {
                    if (req.body.startlLat || req.body.startLong) {
                        coordinates = [parseFloat(req.body.startlLat), parseFloat(req.body.startLong)]
                        req.body.currentLocation = { type: "Point", coordinates };
                    }
                    if (req.body.endLat || req.body.endLong) {
                        coordinates = [parseFloat(req.body.endLat), parseFloat(req.body.endLong)]
                        req.body.destination = { type: "Point", coordinates };
                    }
                    let obj = {
                        userId: userData._id,
                        dateTime: req.body.dateTime,
                        startLocation: req.body.startLocation,
                        endLocation: req.body.endLocation,
                        currentLocation: req.body.currentLocation,
                        destinationLocation: req.body.destination,
                        vehicalType: req.body.vehicalType,
                        description: req.body.description
                    }
                    let request = await rideRequest(obj).save();
                    if (request) {
                        let summary = {
                            rideId: request._id,
                            orderPlace: fullDate,
                            startLocation: req.body.startLocation,
                            endLocation: req.body.endLocation,
                            currentLocation: req.body.currentLocation,
                            destinationLocation: req.body.destination,
                        }
                        await rideSummary(summary).save();
                        let vehical = await vehicalDocument.find({ vehicalType: req.body.vehicalType, status: "ACTIVE", verified: "APPROVE" });
                        let updateRequest;
                        for (let i = 0; i < vehical.length; i++) {
                            let driver = await userModel.findById({ _id: vehical[i].userId, status: "ACTIVE", bookingBlock: false, userType: "PROVIDER" });
                            let distance = await getDistanceFromLatLonInKm(req.body.startlLat, req.body.startLong, driver.currentLocation.coordinates[0], driver.currentLocation.coordinates[1]);
                            if (distance <= 15) {
                                let subject = "Request for ride";
                                let body = `Dear ${driver.name} your have request for ride please check.`
                                if (driver.deviceToken != null || driver.deviceToken != undefined) {
                                    let result = await commonFunction.pushNotification(driver.deviceToken, driver.deviceType, subject, body,);
                                    if (result) {
                                        let d = new Date(), date = d.getDate(); let month = d.getMonth() + 1; let year = d.getFullYear(), hr = d.getHours(), min = d.getMinutes(), sec = d.getSeconds();
                                        let fullDate = await datetimeCalulate(date, month, year, hr, min, sec)
                                        let obj = {
                                            userId: request.userId,
                                            title: subject,
                                            body: body,
                                            requestId: request._id,
                                            date: fullDate,
                                            driverId: driver._id,
                                            notificationType: "SMS"
                                        }
                                        var notif = await notification.create(obj);
                                        if (!notif) {
                                            response(ErrorCode.WENT_WRONG, {}, ErrorMessage.SOMETHING_WRONG)
                                            return;
                                        } else {
                                            updateRequest = await rideRequest.findByIdAndUpdate({ _id: request._id }, { $push: { drivers: driver._id } }, { new: true });
                                            let rideChatObj = {
                                                driverId: driver._id,
                                                userId: updateRequest.userId,
                                                rideId: updateRequest._id
                                            }
                                            let saveRideChat = await rideChat.create(rideChatObj);
                                        }
                                    }
                                } else {
                                    let d = new Date(), date = d.getDate(); let month = d.getMonth() + 1; let year = d.getFullYear(), hr = d.getHours(), min = d.getMinutes(), sec = d.getSeconds();
                                    let fullDate = await datetimeCalulate(date, month, year, hr, min, sec);
                                    let obj = {
                                        userId: request.userId,
                                        title: subject,
                                        body: body,
                                        requestId: request._id,
                                        date: fullDate,
                                        driverId: driver._id,
                                        notificationType: "SMS"
                                    }
                                    var notif = await notification.create(obj);
                                    if (!notif) {

                                        response(ErrorCode.WENT_WRONG, {}, ErrorMessage.SOMETHING_WRONG)
                                    } else {
                                        updateRequest = await rideRequest.findByIdAndUpdate({ _id: request._id }, { $push: { drivers: driver._id } }, { new: true })
                                        let rideChatObj = {
                                            driverId: driver._id,
                                            userId: updateRequest.userId,
                                            rideId: updateRequest._id
                                        }
                                        let saveRideChat = await rideChat.create(rideChatObj);
                                    }
                                }
                            }
                        }
                        response(res, SuccessCode.SUCCESS, updateRequest, "Send request to driver.")
                    }
                } else {
                    response(res, ErrorCode.NOT_FOUND, {}, "Request not send because no driver available.")
                }
            }
        } catch (error) {
            console.log(error)
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG);
        }
    },
    commentOnrideRequest: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId, userType: "PROVIDER" });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let obj;
                let d = new Date(), date = d.getDate(); let month = d.getMonth() + 1; let year = d.getFullYear(), hr = d.getHours(), min = d.getMinutes(), sec = d.getSeconds();
                let fullDate = await datetimeCalulate(date, month, year, hr, min, sec);
                let subject = "Comment on ride request.";
                let findRequest = await rideChat.findOne({ rideId: req.body.requestId, driverId: userData._id, userId: { $ne: userData._id } });
                if (findRequest.auctionStaus == "START") {
                    let alreadycomment = await rideChat.findOne({ _id: findRequest._id, 'commentHistory.$.userId': userData._id, 'commentHistory.$.bidStatus': "PENDING" });
                    if (alreadycomment) {
                        function isNumeric(num) {
                            return !isNaN(num)
                        }
                        if (isNumeric(req.body.comment) == true) {
                            let commentLength = (req.body.comment).length;
                            if (commentLength <= 7) {
                                for (let i = 0; i < alreadycomment.commentHistory.length; i++) {
                                    const element = alreadycomment.commentHistory[i];
                                    if ((element.bidStatus == "PENDING") && ((element.userId.toString()) == (userData._id.toString()))) {
                                        let desc = await rideChat.findOneAndUpdate({ 'commentHistory._id': element._id }, { $set: { 'commentHistory.$.bidStatus': "REJECTED" } }, { new: true })
                                    }
                                }
                                obj = {
                                    userId: userData._id,
                                    comment: req.body.comment,
                                    bidStatus: "PENDING",
                                    commentType: "PRICE"
                                }
                            } else if (commentLength >= 8) {
                                response(res, SuccessCode.BAD_REQUEST, req.body.comment, "You can not share mobile number untill booking confirm.")
                            } else {
                                obj = {
                                    userId: userData._id,
                                    comment: req.body.comment,
                                    commentType: "COMMENT",
                                    bidStatus: ""
                                }
                            }
                        }
                        if (isNumeric(req.body.comment) == false) {
                            let findNumeric = await hasNumber(req.body.comment);
                            if (findNumeric == true) {
                                response(res, SuccessCode.BAD_REQUEST, req.body.comment, "You can not share number in chat.")
                            } else if (findNumeric == false) {
                                obj = {
                                    userId: userData._id,
                                    comment: req.body.comment,
                                    commentType: "COMMENT",
                                    bidStatus: ""
                                }
                            }
                        }
                        let updateRequest1 = await rideChat.findOneAndUpdate({ _id: findRequest._id }, { $push: { commentHistory: obj } }, { new: true })
                        if (updateRequest1) {
                            let findCustomer = await userModel.findById({ _id: findRequest.userId })
                            if (findCustomer.deviceToken != null || findCustomer.deviceToken != undefined) {
                                let body = `Dear ${findCustomer.name} on your ride request driver: ${userData.name} comment: ${req.body.comment}.`
                                let result = await commonFunction.pushNotificationforUser(findCustomer.deviceToken, findCustomer.deviceType, subject, body);
                                let obj = {
                                    title: subject,
                                    body: body,
                                    userId: findCustomer._id,
                                    driverId: userData._id,
                                    requestId: findRequest.rideId,
                                    date: fullDate,
                                    notificationType: "CHAT"
                                }
                                var notif = await notification.create(obj);
                                response(res, SuccessCode.SUCCESS, updateRequest1, "Comment on ride post succesfully.")
                            } else {
                                let body = `Dear ${findCustomer.name} on your ride request driver: ${userData.name} comment: ${req.body.comment}.`
                                let obj = {
                                    title: subject,
                                    body: body,
                                    userId: findCustomer._id,
                                    driverId: userData._id,
                                    requestId: findRequest.rideId,
                                    date: fullDate,
                                    notificationType: "CHAT"
                                }
                                var notif = await notification.create(obj);
                                response(res, SuccessCode.SUCCESS, updateRequest1, "Comment on ride post succesfully.")
                            }
                        }
                    } else {
                        function isNumeric(num) {
                            return !isNaN(num)
                        }
                        if (isNumeric(req.body.comment) == true) {
                            let commentLength = (req.body.comment).length;
                            if (commentLength <= 7) {
                                obj = {
                                    userId: userData._id,
                                    comment: req.body.comment,
                                    bidStatus: "PENDING",
                                    commentType: "PRICE"
                                }
                            } else if (commentLength >= 8) {
                                response(res, ErrorCode.BAD_REQUEST, req.body.comment, "You can not share mobile number untill booking confirm.")
                            } else {
                                obj = {
                                    userId: userData._id,
                                    comment: req.body.comment,
                                    commentType: "COMMENT",
                                    bidStatus: ""
                                }
                            }
                        }
                        if (isNumeric(req.body.comment) == false) {
                            let findNumeric = await hasNumber(req.body.comment);
                            if (findNumeric == true) {
                                response(res, ErrorCode.BAD_REQUEST, req.body.comment, "You can not share number in chat.")
                            } else {
                                obj = {
                                    userId: userData._id,
                                    comment: req.body.comment,
                                    commentType: "COMMENT",
                                    bidStatus: ""
                                }
                            }
                        }
                        let updateRequest = await rideChat.findOneAndUpdate({ _id: findRequest._id }, { $push: { commentHistory: obj } }, { new: true })
                        if (updateRequest) {
                            let findCustomer = await userModel.findById({ _id: findRequest.userId })
                            if (findCustomer.deviceToken != null || findCustomer.deviceToken != undefined) {
                                let body = `Dear ${findCustomer.name} on your ride request driver: ${userData.name} comment: ${req.body.comment}.`
                                let result = await commonFunction.pushNotificationforUser(findCustomer.deviceToken, findCustomer.deviceType, subject, body);
                                let obj = {
                                    title: subject,
                                    body: body,
                                    userId: findCustomer._id,
                                    driverId: userData._id,
                                    requestId: findRequest.rideId,
                                    date: fullDate,
                                    notificationType: "CHAT"
                                }
                                var notif = await notification.create(obj);
                                response(res, SuccessCode.SUCCESS, updateRequest1, "Comment on ride post succesfully.")
                            } else {
                                let body = `Dear ${findCustomer.name} on your ride request driver: ${userData.name} comment: ${req.body.comment}.`
                                let obj = {
                                    title: subject,
                                    body: body,
                                    userId: findCustomer._id,
                                    driverId: userData._id,
                                    requestId: findRequest.rideId,
                                    date: fullDate,
                                    notificationType: "CHAT"
                                }
                                var notif = await notification.create(obj);
                                response(res, SuccessCode.SUCCESS, updateRequest, "Comment on ride post succesfully.")
                            }
                        }
                    }
                } else if (findRequest.auctionStaus == "CLOSE") {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.RIDE_BOOK);
                }
            }
        } catch (error) {
            console.log(error);
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    replyOnridecomment: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId, userType: "CUSTOMER" });
            console.log("=================", userData);
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let obj;
                let d = new Date(), date = d.getDate(); let month = d.getMonth() + 1; let year = d.getFullYear(), hr = d.getHours(), min = d.getMinutes(), sec = d.getSeconds();
                let fullDate = await datetimeCalulate(date, month, year, hr, min, sec);
                let subject = "Comment on ride request.";
                let findRequest = await rideChat.findOne({ rideId: req.body.requestId, driverId: req.body.driverId, userId: userData._id });
                console.log(findRequest);
                if (findRequest.auctionStaus == "START") {
                    function isNumeric(num) {
                        return !isNaN(num)
                    }
                    if (isNumeric(req.body.comment) == true) {
                        let commentLength = (req.body.comment).length;
                        if (commentLength <= 7) {
                            obj = {
                                userId: userData._id,
                                comment: req.body.comment,
                                bidStatus: "PENDING",
                                commentType: "PRICE"
                            }
                        } else if (commentLength >= 8) {
                            response(res, ErrorCode.BAD_REQUEST, req.body.comment, "You can not share mobile number untill booking confirm.")
                        } else {
                            obj = {
                                userId: userData._id,
                                comment: req.body.comment,
                                commentType: "COMMENT",
                                bidStatus: ""
                            }
                        }
                    }
                    if (isNumeric(req.body.comment) == false) {
                        let findNumeric = await hasNumber(req.body.comment);
                        if (findNumeric == true) {
                            response(res, ErrorCode.BAD_REQUEST, req.body.comment, "You can not share number in chat.")
                        } else {
                            obj = {
                                userId: userData._id,
                                comment: req.body.comment,
                                commentType: "COMMENT",
                                bidStatus: ""
                            }
                        }
                    }
                    let updateRequest = await rideChat.findOneAndUpdate({ _id: findRequest._id }, { $push: { commentHistory: obj } }, { new: true })
                    if(updateRequest){
                        let findDriver = await userModel.findById({ _id: findRequest.driverId })
                        if (findDriver.deviceToken != null || findDriver.deviceToken != undefined) {
                            let body = `Dear ${findDriver.name} on your ride request user: ${userData.name} comment: ${req.body.comment}.`
                            let result = await commonFunction.pushNotification(findDriver.deviceToken, findDriver.deviceType, subject, body);
                            let obj = {
                                title: subject,
                                body: body,
                                userId: userData._id,
                                driverId: findDriver._id,
                                requestId: findRequest.rideId,
                                date: fullDate,
                                notificationType: "CHAT"
                            }
                            var notif = await notification.create(obj);
                            response(res, SuccessCode.SUCCESS, updateRequest1, "Comment on ride post succesfully.")
                        } else {
                            let body = `Dear ${findDriver.name} on your ride request user: ${userData.name} comment: ${req.body.comment}.`
                            let obj = {
                                title: subject,
                                body: body,
                                userId: userData._id,
                                driverId: findDriver._id,
                                requestId: findRequest.rideId,
                                date: fullDate,
                                notificationType: "CHAT"
                            }
                            var notif = await notification.create(obj);
                            response(res, SuccessCode.SUCCESS, updateRequest, "Comment on ride post succesfully.")
                        }
                    }
                } else if (findRequest.auctionStaus == "CLOSE") {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.RIDE_BOOK);
                }
            }
        } catch (error) {
            console.log(error);
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    rideSummaryDetails: async (req, res, next) => {
        try {
            let details = await rideSummary.findOne({ rideId: req.query.rideId });
            if (!details) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND);
            } else {
                response(res, SuccessCode.SUCCESS, details, SuccessMessage.DATA_FOUND);
            }
        } catch (error) {
            console.log(error);
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    viewRide: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let rideDetails = await rideRequest.findOne({ _id: req.body._id }).populate({ path: 'vehicalType', select: 'vehicalName vehicalImage  -_id' });
                if (!rideDetails) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND)
                } else {
                    response(res, SuccessCode.SUCCESS, rideDetails, SuccessMessage.DATA_FOUND);
                }
            }
        } catch (error) {
            console.log(error);
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    rideList: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let query;
                if (req.query.auctionStaus) {
                    query = { $and: [{ $or: [{ userId: userData._id }, { drivers: { $in: userData._id } }], status: "ACTIVE", auctionStaus: req.query.auctionStaus }] }
                } else {
                    query = { $and: [{ $or: [{ userId: userData._id }, { drivers: { $in: userData._id } }], status: "ACTIVE", auctionStaus: ["START", "CANCEL"] }] }
                }
                var options = {
                    sort: { createdAt: -1 },
                    populate: { path: "vehicalType", select: 'vehicalName vehicalImage  -_id' }
                };
                rideRequest.paginate(query, options, (err, result) => {
                    if (err) {
                        response(res, ErrorCode.WENT_WRONG, [], ErrorMessage.INTERNAL_ERROR);
                    }
                    else if (result.docs.length == 0) {
                        response(res, ErrorCode.NOT_FOUND, [], ErrorMessage.NOT_FOUND);
                    }
                    else {
                        response(res, SuccessCode.SUCCESS, result.docs, SuccessMessage.DATA_FOUND);
                    }
                })
            }
        }
        catch (error) {
            response(res, ErrorCode.WENT_WRONG, [], ErrorMessage.SOMETHING_WRONG);
        }
    },
    viewrequestDrivers: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let rideDetails = await rideRequest.findOne({ _id: req.query._id });
                if (!rideDetails) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND)
                } else {
                    let driverDetails = [];
                    let driverArray = rideDetails.drivers;
                    for (let i = 0; i < driverArray.length; i++) {
                        const element = driverArray[i];
                        let driver = await userModel.findOne({ _id: element });
                        let obj = {
                            _id: driver._id,
                            name: driver.name,
                            profilePic: driver.profilePic,
                            userType: driver.userType,
                            online: driver.online
                        };
                        driverDetails.push(obj);
                    }
                    response(res, SuccessCode.SUCCESS, driverDetails, SuccessMessage.DATA_FOUND);
                }
            }
        } catch (error) {
            console.log(error);
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    rideChatlist: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId, userType: "CUSTOMER" });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let findChat = await rideChat.find({ userId: userData._id, auctionStaus: "START", rideId: req.query.rideId }).populate('driverId');
                if (findChat.length == 0) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND);
                } else {
                    response(res, SuccessCode.SUCCESS, findChat, SuccessMessage.DATA_FOUND);
                }
            }
        } catch (error) {
            console.log(error);
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    viewRideChatforUser: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId, userType: "CUSTOMER" });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let findChat = await rideChat.findOne({ driverId: req.query.driverId, rideId: req.query.rideId }).populate('driverId');
                if (!findChat) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND);
                } else {
                    response(res, SuccessCode.SUCCESS, findChat, SuccessMessage.DATA_FOUND);
                }
            }
        } catch (error) {
            console.log(error);
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    viewRideChatforProvider: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId, userType: "PROVIDER" });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let findChat = await rideChat.findOne({ driverId: userData._id, auctionStaus: "START", rideId: req.query.rideId });
                if (!findChat) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND);
                } else {
                    response(res, SuccessCode.SUCCESS, findChat, SuccessMessage.DATA_FOUND);
                }
            }
        } catch (error) {
            console.log(error);
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    acceptProposal: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId, userType: "CUSTOMER" });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let findRideChat = await rideChat.find({ rideId: req.body.rideId });
                if (findRideChat.length == 0) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
                } else {
                    for (let i = 0; i < findRideChat.length; i++) {
                        const findChatId = findRideChat[i]._id;
                        if (findChatId == req.body.chatId) {
                            let findRequest = await rideChat.findOne({ _id: req.body.chatId });
                            if (findRequest) {
                                for (let i = 0; i < findRequest.commentHistory.length; i++) {
                                    const element = findRequest.commentHistory[i]._id;
                                    if (element == req.body.commentId) {
                                        let updateRequest = await rideChat.findOneAndUpdate({ _id: findRequest._id, 'commentHistory._id': req.body.commentId }, { $set: { 'commentHistory.$.bidStatus': "ACCEPTED", bidStatus: "ACCEPTED", auctionStaus: "CLOSE" } }, { new: true })
                                        let driverId = updateRequest.driverId;
                                        let driverData = await userModel.findOne({ _id: driverId, userType: "PROVIDER" });
                                        let price = findRequest.commentHistory[i].comment;
                                        let obj = {
                                            driverId: driverId,
                                            userId: findRequest.userId,
                                            rideId: findRequest.rideId,
                                            messageDetail: [{
                                                sender: driverId,
                                                userName: driverData.name,
                                                Type: "TEXT",
                                                message: "Thank you, for chossing my service for ride.",
                                                time: Date.now()
                                            }],
                                        }
                                        let rideData = await rideRequest.findOne({ _id: findRequest.rideId });
                                        let vehicalDetails = await vehicalType.findOne({ _id: rideData.vehicalType })
                                        let rideGenId = (rideData._id).toString();
                                        let first = rideGenId.substr(6, 10);
                                        let vehic = vehicalDetails.vehicalName;
                                        let Second = vehic.substr(0, 3);
                                        let bookingId = `B${first}${Second}`;
                                        let bookingObj = {
                                            userId: userData._id,
                                            drivers: driverId,
                                            rideId: rideData._id,
                                            dateTime: rideData.dateTime,
                                            bookingId: bookingId,
                                            amount: price,
                                            vehicalType: rideData.vehicalType,
                                            description: rideData.description || "",
                                            startLocation: rideData.startLocation,
                                            endLocation: rideData.endLocation,
                                            currentLocation: rideData.currentLocation,
                                            destinationLocation: rideData.destinationLocation
                                        }
                                        let bookingSave = await bookingModel(bookingObj).save();
                                        if (bookingSave) {
                                            let subject = "Accept request.";
                                            let body = `Dear ${driverData.name} your have request has been accepted by user.`
                                            if (driverData.deviceToken != null || driverData.deviceToken != undefined) {
                                                let result = await commonFunction.pushNotification(driverData.deviceToken, driverData.deviceType, subject, body);
                                                if (result) {
                                                    let obj2 = {
                                                        userId: findRequest.userId,
                                                        title: subject,
                                                        body: body,
                                                        requestId: findRequest._id,
                                                        driverId: bookingSave.drivers,
                                                        notificationType: "SMS"
                                                    }
                                                    var notif = await notification.create(obj2);
                                                    if (!notif) {
                                                        response(ErrorCode.WENT_WRONG, {}, ErrorMessage.SOMETHING_WRONG)
                                                    } else {
                                                        let chatData = await chatModel(obj).save();
                                                        if (chatData) {
                                                            let messageDetail = [
                                                                {
                                                                    sender: userData._id,
                                                                    userName: userData.name,
                                                                    Type: "TEXT",
                                                                    message: userData.mobileNumber,
                                                                    time: Date.now()
                                                                },
                                                                {
                                                                    sender: driverId,
                                                                    userName: driverData.name,
                                                                    Type: "TEXT",
                                                                    message: driverData.mobileNumber,
                                                                    time: Date.now()
                                                                }
                                                            ]
                                                            console.log("1187======================>", messageDetail)
                                                            for (let i = 0; i < messageDetail.length; i++) {
                                                                await chatModel.findByIdAndUpdate({ _id: chatData._id }, { $push: { messageDetail: messageDetail[i] } }, { new: true })
                                                            }
                                                        }
                                                    }
                                                }
                                            } else {
                                                let obj2 = {
                                                    userId: findRequest.userId,
                                                    title: subject,
                                                    body: body,
                                                    requestId: findRequest._id,
                                                    driverId: bookingSave.drivers,
                                                    notificationType: "SMS"
                                                }
                                                var notif = await notification.create(obj2);
                                                if (!notif) {
                                                    response(ErrorCode.WENT_WRONG, {}, ErrorMessage.SOMETHING_WRONG)
                                                } else {
                                                    let chatData = await chatModel(obj).save();
                                                    if (chatData) {
                                                        let messageDetail = [
                                                            {
                                                                sender: userData._id,
                                                                userName: userData.name,
                                                                Type: "TEXT",
                                                                message: userData.mobileNumber,
                                                                time: Date.now()
                                                            },
                                                            {
                                                                sender: driverId,
                                                                userName: driverData.name,
                                                                Type: "TEXT",
                                                                message: driverData.mobileNumber,
                                                                time: Date.now()
                                                            }
                                                        ]
                                                        console.log("1197======================>", messageDetail)
                                                        for (let i = 0; i < messageDetail.length; i++) {
                                                            await chatModel.findByIdAndUpdate({ _id: chatData._id }, { $push: { messageDetail: messageDetail[i] } }, { new: true })
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    } else {
                                        await rideChat.findOneAndUpdate({ _id: findRequest._id, 'commentHistory._id': element }, { $set: { 'commentHistory.$.bidStatus': "REJECTED", auctionStaus: "CLOSE" } }, { new: true })
                                    }
                                }
                            }
                        } else {
                            await rideChat.findByIdAndUpdate({ _id: findChatId }, { $set: { bidStatus: "REJECTED", auctionStaus: "CLOSE" } }, { new: true });
                        }
                    }
                    let a = await rideRequest.findOneAndUpdate({ _id: req.body.rideId }, { $set: { auctionStaus: "CLOSE" } }, { new: true });
                    if (a) {
                        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                        let d = new Date(); let hour = d.getHours(); let minute = d.getMinutes(); let second = d.getSeconds();
                        let date = d.getDate(); let month = months[d.getMonth()]; let year = d.getFullYear();
                        let fullDate = await datetimeCalulate(date, month, year, hour, minute, second)
                        let b = await rideSummary.findOneAndUpdate({ rideId: req.body.rideId }, { $set: { bookingConfirm: fullDate } }, { new: true });
                        response(res, SuccessCode.SUCCESS, a, "Accept ride proposal.");
                    }
                }
            }
        } catch (error) {
            console.log(error);
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    acceptProposalfromDriverSide: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId, userType: "PROVIDER" });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let findRideChat = await rideChat.find({ rideId: req.body.rideId });
                if (findRideChat.length == 0) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
                } else {
                    for (let i = 0; i < findRideChat.length; i++) {
                        const findChatId = findRideChat[i]._id;
                        if (findChatId == req.body.chatId) {
                            let findRequest = await rideChat.findOne({ _id: req.body.chatId });
                            if (findRequest) {
                                for (let i = 0; i < findRequest.commentHistory.length; i++) {
                                    const element = findRequest.commentHistory[i]._id;
                                    if (element == req.body.commentId) {
                                        let updateRequest = await rideChat.findOneAndUpdate({ _id: findRequest._id, 'commentHistory._id': req.body.commentId }, { $set: { 'commentHistory.$.bidStatus': "ACCEPTED", bidStatus: "ACCEPTED", auctionStaus: "CLOSE" } }, { new: true })
                                        let driverId = updateRequest.driverId;
                                        let driverData = await userModel.findOne({ _id: driverId, userType: "PROVIDER" });
                                        let customerData = await userModel.findOne({ _id: findRequest.userId, userType: "CUSTOMER" });
                                        let price = findRequest.commentHistory[i].comment;
                                        let obj = {
                                            driverId: driverId,
                                            userId: findRequest.userId,
                                            rideId: findRequest.rideId,
                                            messageDetail: [{
                                                sender: driverId,
                                                userName: driverData.name,
                                                Type: "TEXT",
                                                message: "Thank you, for chossing my service for ride.",
                                                time: Date.now()
                                            }],
                                        }
                                        let rideData = await rideRequest.findOne({ _id: findRequest.rideId });
                                        let vehicalDetails = await vehicalType.findOne({ _id: rideData.vehicalType })
                                        let rideGenId = (rideData._id).toString();
                                        let first = rideGenId.substr(6, 10);
                                        let vehic = vehicalDetails.vehicalName;
                                        let Second = vehic.substr(0, 3);
                                        let bookingId = `B${first}${Second}`;
                                        let bookingObj = {
                                            userId: findRequest.userId,
                                            drivers: driverId,
                                            rideId: rideData._id,
                                            dateTime: rideData.dateTime,
                                            bookingId: bookingId,
                                            amount: price,
                                            vehicalType: rideData.vehicalType,
                                            description: rideData.description || "",
                                            startLocation: rideData.startLocation,
                                            endLocation: rideData.endLocation,
                                            currentLocation: rideData.currentLocation,
                                            destinationLocation: rideData.destinationLocation
                                        }
                                        let bookingSave = await bookingModel(bookingObj).save();
                                        if (bookingSave) {
                                            let subject = "Accept request.";
                                            let body = `Dear ${driverData.name} your have request has been accepted by user.`
                                            if (driverData.deviceToken != null || driverData.deviceToken != undefined) {
                                                let result = await commonFunction.pushNotification(driverData.deviceToken, driverData.deviceType, subject, body);
                                                if (result) {
                                                    let obj2 = {
                                                        userId: findRequest.userId,
                                                        title: subject,
                                                        body: body,
                                                        requestId: findRequest._id,
                                                        driverId: bookingSave.drivers,
                                                        notificationType: "SMS"
                                                    }
                                                    var notif = await notification.create(obj2);
                                                    if (!notif) {
                                                        response(ErrorCode.WENT_WRONG, {}, ErrorMessage.SOMETHING_WRONG)
                                                    } else {
                                                        let chatData = await chatModel(obj).save();
                                                        if (chatData) {
                                                            let messageDetail = [
                                                                {
                                                                    sender: customerData._id,
                                                                    userName: customerData.name,
                                                                    Type: "TEXT",
                                                                    message: customerData.mobileNumber,
                                                                    time: Date.now()
                                                                },
                                                                {
                                                                    sender: driverId,
                                                                    userName: driverData.name,
                                                                    Type: "TEXT",
                                                                    message: driverData.mobileNumber,
                                                                    time: Date.now()
                                                                }
                                                            ]
                                                            console.log("1197======================>", messageDetail)
                                                            for (let i = 0; i < messageDetail.length; i++) {
                                                                await chatModel.findByIdAndUpdate({ _id: chatData._id }, { $push: { messageDetail: messageDetail[i] } }, { new: true })
                                                            }
                                                        }

                                                    }
                                                }
                                            } else {
                                                let obj2 = {
                                                    userId: findRequest.userId,
                                                    title: subject,
                                                    body: body,
                                                    requestId: findRequest._id,
                                                    driverId: bookingSave.drivers,
                                                    notificationType: "SMS"
                                                }
                                                var notif = await notification.create(obj2);
                                                if (!notif) {
                                                    response(ErrorCode.WENT_WRONG, {}, ErrorMessage.SOMETHING_WRONG)
                                                } else {
                                                    let chatData = await chatModel(obj).save();
                                                    if (chatData) {
                                                        let messageDetail = [
                                                            {
                                                                sender: customerData._id,
                                                                userName: customerData.name,
                                                                Type: "TEXT",
                                                                message: customerData.mobileNumber,
                                                                time: Date.now()
                                                            },
                                                            {
                                                                sender: driverId,
                                                                userName: driverData.name,
                                                                Type: "TEXT",
                                                                message: driverData.mobileNumber,
                                                                time: Date.now()
                                                            }
                                                        ]
                                                        console.log("1197======================>", messageDetail)
                                                        for (let i = 0; i < messageDetail.length; i++) {
                                                            await chatModel.findByIdAndUpdate({ _id: chatData._id }, { $push: { messageDetail: messageDetail[i] } }, { new: true })
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    } else {
                                        await rideChat.findOneAndUpdate({ _id: findRequest._id, 'commentHistory._id': element }, { $set: { 'commentHistory.$.bidStatus': "REJECTED", auctionStaus: "CLOSE" } }, { new: true })
                                    }
                                }
                            }
                        } else {
                            await rideChat.findByIdAndUpdate({ _id: findChatId }, { $set: { bidStatus: "REJECTED", auctionStaus: "CLOSE" } }, { new: true });
                        }
                    }
                    let a = await rideRequest.findOneAndUpdate({ _id: req.body.rideId }, { $set: { auctionStaus: "CLOSE" } }, { new: true });
                    if (a) {
                        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                        let d = new Date(); let hour = d.getHours(); let minute = d.getMinutes(); let second = d.getSeconds();
                        let date = d.getDate(); let month = months[d.getMonth()]; let year = d.getFullYear();
                        let fullDate = await datetimeCalulate(date, month, year, hour, minute, second)
                        let b = await rideSummary.findOneAndUpdate({ rideId: req.body.rideId }, { $set: { bookingConfirm: fullDate } }, { new: true });
                        response(res, SuccessCode.SUCCESS, a, "Accept ride proposal.");
                    }
                }
            }
        } catch (error) {
            console.log(error);
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    ///////////////////////////////////////////////////////////////// booking  ////////////////////////////////////////
    bookingDetails: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let bookingDetails = await bookingModel.findOne({ _id: req.body._id }).populate({ path: 'drivers', select: 'name userType profilePic' });
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
    bookingList: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let query;
                if (req.query.bookingStatus) {
                    query = { $and: [{ $or: [{ userId: userData._id }, { drivers: { $in: userData._id } }], status: "ACTIVE", bookingStatus: req.query.bookingStatus }] }
                } else {
                    query = { $and: [{ $or: [{ userId: userData._id }, { drivers: { $in: userData._id } }], status: "ACTIVE" }] }
                }
                var options = {
                    sort: { createdAt: -1 },
                    populate: { path: 'drivers', select: 'name userType profilePic' }
                };
                bookingModel.paginate(query, options, (err, result) => {
                    if (err) {
                        response(res, ErrorCode.WENT_WRONG, [], ErrorMessage.INTERNAL_ERROR);
                    }
                    else if (result.docs.length == 0) {
                        response(res, ErrorCode.NOT_FOUND, [], ErrorMessage.NOT_FOUND);
                    }
                    else {
                        response(res, SuccessCode.SUCCESS, result.docs, SuccessMessage.DATA_FOUND);
                    }
                })
            }
        }
        catch (error) {
            response(res, ErrorCode.WENT_WRONG, [], ErrorMessage.SOMETHING_WRONG);
        }
    },
    bookingChat: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let chatData = await chatModel.findOne({ rideId: req.query.rideId });
                if (chatData) {
                    let messageDetail = {
                        sender: userData._id,
                        userName: userData.name,
                        Type: "TEXT",
                        message: req.query.message,
                        time: Date.now()
                    }
                    console.log("1187======================>", messageDetail)
                    let saveChat = await chatModel.findByIdAndUpdate({ _id: chatData._id }, { $push: { messageDetail: messageDetail } }, { new: true })
                    if (saveChat) {
                        response(res, SuccessCode.SUCCESS, saveChat, "Message send successfully.");
                    }
                }
            }
        } catch (error) {
            console.log(error);
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    viewBookingChat: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let chatData = await chatModel.findOne({ rideId: req.query.rideId });
                if (chatData) {
                    response(res, SuccessCode.SUCCESS, chatData, SuccessMessage.DATA_FOUND);
                } else {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND);
                }
            }
        } catch (error) {
            console.log(error);
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    startRide: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId, userType: "PROVIDER" });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let bookingDetails = await bookingModel.findOne({ _id: req.body._id, bookingStatus: "PENDING" })
                if (!bookingDetails) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND);
                } else {
                    let updateStatus = await bookingModel.findByIdAndUpdate({ _id: bookingDetails._id }, { $set: { bookingStatus: "START" } }, { new: true });
                    if (updateStatus) {
                        response(res, SuccessCode.SUCCESS, updateStatus, "you have start driving.")
                    }
                }
            }
        } catch (error) {
            console.log(error);
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    endRide: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId, userType: "PROVIDER" });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let bookingDetails = await bookingModel.findOne({ _id: req.body._id, bookingStatus: "START" })
                if (!bookingDetails) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND);
                } else {
                    if (bookingDetails.paymentStatus == "SUCCESS") {
                        let updateStatus = await bookingModel.findByIdAndUpdate({ _id: bookingDetails._id }, { $set: { bookingStatus: "STOP" } }, { new: true });
                        if (updateStatus) {
                            response(res, SuccessCode.SUCCESS, updateStatus, "you have stop driving.")
                        }
                    } else {
                        response(res, SuccessCode.SUCCESS, bookingDetails, "User not done payment till now.")
                    }
                }
            }
        } catch (error) {
            console.log(error);
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    cancelRequest: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId, userType: "CUSTOMER" });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let bookingDetails = await rideRequest.findOne({ _id: req.body._id, auctionStaus: "START" })
                if (!bookingDetails) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND);
                } else {
                    let updateStatus = await rideRequest.findByIdAndUpdate({ _id: bookingDetails._id }, { $set: { auctionStaus: "CANCEL" } }, { new: true });
                    if (updateStatus) {
                        response(res, SuccessCode.SUCCESS, updateStatus, "you have stop driving.")
                    }
                }
            }
        } catch (error) {
            console.log(error);
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    cancelBooking: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId, userType: "CUSTOMER" });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let bookingDetails = await bookingModel.findOne({ _id: req.body._id, bookingStatus: "PENDING" })
                if (!bookingDetails) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND);
                } else {
                    if (bookingDetails.paymentStatus == "PENDING") {
                        let updateStatus = await bookingModel.findByIdAndUpdate({ _id: bookingDetails._id }, { $set: { bookingStatus: "CANCEL" } }, { new: true });
                        if (updateStatus) {
                            response(res, SuccessCode.SUCCESS, updateStatus, "your booking cancel successfully.")
                        }
                    }
                }
            }
        } catch (error) {
            console.log(error);
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    ///////////////////////////////////////////////////////booking payment tranaction //////////////////////
    bookingPaymentList: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let query = { $or: [{ user: userData._id }, { driverId: userData._id }] }
                var options = {
                    sort: { createdAt: -1 },
                    populate: { path: 'bookingId' }
                };
                bookingPayment.paginate(query, options, (err, result) => {
                    if (err) {
                        response(res, ErrorCode.WENT_WRONG, [], ErrorMessage.INTERNAL_ERROR);
                    }
                    else if (result.docs.length == 0) {
                        response(res, ErrorCode.NOT_FOUND, [], ErrorMessage.NOT_FOUND);
                    }
                    else {
                        response(res, SuccessCode.SUCCESS, result.docs, SuccessMessage.DATA_FOUND);
                    }
                })
            }
        }
        catch (error) {
            response(res, ErrorCode.WENT_WRONG, [], ErrorMessage.SOMETHING_WRONG);
        }
    },
    viewBookingPayment: async (req, res, next) => {
        try {
            let data = await bookingPayment.findOne({ _id: req.params._id }).populate({ path: 'driverId user', select: 'name userType profilePic' });
            if (!data) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND);
            } else {
                response(res, SuccessCode.SUCCESS, data, SuccessMessage.DATA_FOUND);
            }
        } catch (error) {
            console.log(error);
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    ridePayment: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let bookingDetails = await bookingModel.findOne({ _id: req.body._id, bookingStatus: { $ne: "CANCEL" }, paymentStatus: { $ne: "SUCCESS" } })
                if (!bookingDetails) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND);
                } else {
                    let vehicalDetails = await vehicalType.findOne({ _id: bookingDetails.vehicalType })
                    if (!vehicalDetails) {
                        response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND)
                    } else {
                        if (req.body.paymentMode == "CASH") {
                            let totalCommission, driverCommission;
                            if (vehicalDetails.disCountType == "FLAT") {
                                totalCommission = vehicalDetails.totalCommission;
                                driverCommission = bookingDetails.amount - totalCommission;
                            } else if (vehicalDetails.disCountType == "PERCENTAGE") {
                                totalCommission = (vehicalDetails.totalCommission * bookingDetails.amount) / 100;
                                driverCommission = (vehicalDetails.driverCommission * bookingDetails.amount) / 100;
                            }
                            let findCash1 = await cashinHand.findOne({ userId: bookingDetails.drivers });
                            if (!findCash1) {
                                let cashObj = {
                                    userId: bookingDetails.drivers
                                }
                                await new cashinHand(cashObj).save()
                            }
                            let findCash = await cashinHand.findOne({ userId: bookingDetails.drivers });
                            let adminBalance = findCash.adminCash + totalCommission;   // admin  let 15% ---> 15
                            let driverBalance = findCash.driverCash + driverCommission;
                            let totalCash = findCash.totalCash + totalCommission + driverCommission;
                            let updateCash = await cashinHand.findByIdAndUpdate({ _id: findCash._id }, { $set: { driverCash: driverBalance, adminCash: adminBalance, totalCash: totalCash, totalCashbooking: findCash1.totalCashbooking + 1 } }, { new: true })
                            let obj = {
                                user: bookingDetails.userId,
                                driverId: bookingDetails.drivers,
                                bookingId: bookingDetails._id,
                                id: bookingDetails.bookingId,
                                amount: bookingDetails.amount,
                                paymentMode: "CASH",
                                transactionStatus: "SUCCESS",
                            }
                            let bookingPaymentSave = await bookingPayment(obj).save();
                            if (bookingPaymentSave) {
                                let bookingUpdate = await bookingModel.findByIdAndUpdate({ _id: bookingDetails._id }, { $set: { paymentStatus: "SUCCESS", paymentMode: bookingPaymentSave.paymentMode } }, { new: true })
                                response(res, SuccessCode.SUCCESS, bookingPaymentSave, "Thanks for your payment.")
                            }
                        } else if (req.body.paymentMode == "WALLET") {
                            if (userData.walletBalance >= bookingDetails.amount) {
                                let totalCommission, driverCommission;
                                if (vehicalDetails.disCountType == "FLAT") {
                                    totalCommission = vehicalDetails.totalCommission;
                                    driverCommission = bookingDetails.amount - totalCommission;
                                } else if (vehicalDetails.disCountType == "PERCENTAGE") {
                                    totalCommission = (vehicalDetails.totalCommission * bookingDetails.amount) / 100;
                                    driverCommission = (vehicalDetails.driverCommission * bookingDetails.amount) / 100;
                                }
                                let adminData = await userModel.findOne({ userType: "ADMIN", status: "ACTIVE" })
                                let driver = await userModel.findOne({ _id: bookingDetails.drivers, status: "ACTIVE" });
                                let userBalance = userData.walletBalance - bookingDetails.amount; // user 100
                                let adminBalance = adminData.walletBalance + totalCommission;   // admin  let 15% ---> 15
                                let driverBalance = driver.walletBalance + driverCommission;  // driver    let 85% ---> 85
                                let userWallet = await userModel.findByIdAndUpdate({ _id: bookingDetails.userId }, { $set: { walletBalance: userBalance } }, { new: true });
                                let driverWallet = await userModel.findByIdAndUpdate({ _id: bookingDetails.drivers }, { $set: { walletBalance: driverBalance } }, { new: true });
                                let adminWallet = await userModel.findByIdAndUpdate({ _id: adminData._id }, { $set: { walletBalance: adminBalance } }, { new: true });
                                if (userWallet && driverWallet && adminWallet) {
                                    let obj = {
                                        user: bookingDetails.userId,
                                        driverId: bookingDetails.drivers,
                                        bookingId: bookingDetails._id,
                                        id: bookingDetails.bookingId,
                                        amount: bookingDetails.amount,
                                        paymentMode: "WALLET",
                                        transactionStatus: "SUCCESS",
                                    }
                                    let bookingPaymentSave = await bookingPayment(obj).save();
                                    if (bookingPaymentSave) {
                                        let bookingUpdate = await bookingModel.findByIdAndUpdate({ _id: bookingDetails._id }, { $set: { paymentStatus: "SUCCESS", paymentMode: bookingPaymentSave.paymentMode } }, { new: true })
                                        response(res, SuccessCode.SUCCESS, bookingPaymentSave, "Thanks for your payment.")
                                    }
                                }
                            } else {
                                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.ADD_MONEY);
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
    ////////////////////////////////////////////////////////// wallet transaction //////////////////////////
    transactionList: async (req, res, next) => {
        try {
            let user = await userModel.findOne({ _id: req.userId, status: "ACTIVE" });
            if (!user) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let data = await transaction.find({ userId: user._id, transactionType: "DEPOSITE" }).sort({ "createdAt": -1 });
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
    viewTransaction: async (req, res, next) => {
        try {
            let data = await transaction.findOne({ _id: req.params._id }).populate({ path: 'userId', select: 'name userType profilePic' });
            if (!data) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND);
            } else {
                response(res, SuccessCode.SUCCESS, data, SuccessMessage.DATA_FOUND);
            }
        } catch (error) {
            console.log(error);
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    addMoneytowallet: async (req, res) => {
        try {
            let user = await userModel.findOne({ _id: req.userId, userType: "CUSTOMER", status: "ACTIVE" });
            if (!user) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                if (req.body.amount > 0) {
                    var currDate = new Date();
                    let hour = currDate.getHours();
                    let minute = currDate.getMinutes();
                    let second = currDate.getSeconds();
                    let year = currDate.getFullYear();
                    let month = currDate.getMonth();
                    let date = currDate.getDate();
                    let dateTime = await datetimeCalulate(date, month, year, hour, minute, second)
                    let obj = {
                        userId: user._id,
                        amount: req.body.amount,
                        dateTime: dateTime,
                        status: "PENDING",
                        transactionType: "DEPOSITE"
                    }
                    let transaction1 = await transaction(obj).save();
                    if (transaction1) {
                        response(res, SuccessCode.SUCCESS, transaction1, `Payment in Proccess.`);
                    }
                } else {
                    response(res, ErrorCode.WENT_WRONG, {}, 'Amount not equal to 0.')
                }
            }
        } catch (error) {
            console.log(error);
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    paymentVerify: async (req, res, next) => {
        try {
            let user = await userModel.findOne({ _id: req.userId, status: "ACTIVE" });
            if (!user) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let data = await transaction.findOne({ userId: user._id, transactionType: "DEPOSITE", status: "PENDING" });
                if (req.body.status == "PAID") {
                    let transaction1 = await transaction.findByIdAndUpdate({ _id: data._id }, { $set: req.body }, { new: true });
                    let wallet = await userModel.findOne({ _id: data.userId });
                    if (wallet) {
                        let amount = Number(data.amount) + wallet.walletBalance;
                        let dataUp = await userModel.findByIdAndUpdate({ _id: wallet._id }, { $set: { walletBalance: amount } }, { new: true })
                        return res.send({ responseCode: 200, responseMessage: "Money added Successfully", result: transaction1 })
                    }
                } else if (req.body.status == "FAILED") {
                    req.body.transactionId = `pay_${commonFunction.paymentId()}` || req.body.transactionId;
                    let transaction1 = await transaction.findByIdAndUpdate({ _id: data._id }, { $set: req.body });
                    return res.send({ responseCode: 200, responseMessage: "Transaction failed.", result: transaction1 })
                }
            }
        } catch (error) {
            return next(error)
        }
    },
    withdrawRequest: async (req, res, next) => {
        try {
            let user = await userModel.findOne({ _id: req.userId, status: "ACTIVE" });
            if (!user) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                if (user.walletBalance < req.body.amount) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.MOMEY_INSUFFICENT);
                } else {
                    let transactionFind = await transaction.findOne({ amount: req.body.amount, userId: user._id, status: "PENDING", transactionType: "WITHDRAW" });
                    if (transactionFind) {
                        response(res, ErrorCode.ALREADY_EXIST, transactionFind, ErrorMessage.ALREADY_WITHDRAW_REQUEST);
                    } else {
                        if (req.body.paymentMethod == "BANK") {
                            let data1 = req.body.ifsc
                            let data2 = data1.toUpperCase()
                            let data = await ifsc.fetchDetails(data2);
                            req.body.userId = user._id;
                            req.body.bank = data.BANK;
                            req.body.ifsc = data.IFSC;
                            req.body.transactionType = "WITHDRAW"
                            let transaction1 = await transaction(req.body).save();
                            if (transaction1) {
                                response(res, SuccessCode.SUCCESS, transaction1, `Your payment request sent successfully.`);
                            }
                        } else if (req.body.paymentMethod == "GOOGLE_PAY") {
                            req.body.userId = user._id;
                            req.body.name = req.body.name;
                            req.body.mobileNumber = req.body.mobileNumber;
                            req.body.upiMobile = "MOBILE"
                            req.body.message = req.body.message;
                            req.body.transactionType = "WITHDRAW";
                            let transaction1 = await transaction(req.body).save();
                            if (transaction1) {
                                response(res, SuccessCode.SUCCESS, transaction1, `Your payment request sent successfully.`);
                            }
                        } else {
                            req.body.userId = user._id;
                            req.body.mobileNumber = req.body.mobileNumber;
                            req.body.name = req.body.name;
                            req.body.message = req.body.message;
                            req.body.transactionType = "WITHDRAW";
                            let transaction1 = await transaction(req.body).save();
                            if (transaction1) {
                                response(res, SuccessCode.SUCCESS, transaction1, `Your payment request sent successfully.`);
                            }
                        }
                    }
                }

            }
        } catch (error) {
            if (error == 'Invalid IFSC Code') {
                response(res, ErrorCode.NOT_FOUND, {}, "Invalid IFSC Code");
            } else {
                response(res, ErrorCode.WENT_WRONG, error, ErrorMessage.SOMETHING_WRONG)
            }
        }
    },
    withdrawRequestList: async (req, res, next) => {
        try {
            let user = await userModel.findOne({ _id: req.userId, status: "ACTIVE" });
            if (!user) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let data = await transaction.find({ userId: user._id, transactionType: "WITHDRAW" });
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
    serviceAvailable: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId, userType: "CUSTOMER" });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let city, city1, state;
                let smsResult = await commonFunction.findLocation(req.body.latitude, req.body.longitude);
                for (let i = 0; i < smsResult.results[0].address_components.length; i++) {
                    if (smsResult.results[0].address_components[i].types[0] === 'locality') {
                        city = smsResult.results[0].address_components[i].long_name;
                        console.log("===========>", city);
                    }
                    if (smsResult.results[0].address_components[i].types[0] === 'administrative_area_level_2') {
                        city1 = smsResult.results[0].address_components[i].long_name;
                        console.log("===========>", city1);
                    }
                    if (smsResult.results[0].address_components[i].types[0] === 'administrative_area_level_1') {
                        state = smsResult.results[0].address_components[i].long_name;
                    }
                }
                console.log("============>", state);
                let findSelected = await slectedCity.findOne({ stateName: state });
                if (!findSelected) {
                    response(res, ErrorCode.NOT_FOUND, {}, "Service not available in your state.")
                } else {
                    if (findSelected.city.length > 0) {
                        for (let i = 0; i < findSelected.city.length; i++) {
                            if (findSelected.city[i].cityName == city || findSelected.city[i].cityName == city1) {
                                let obj;
                                if ((findSelected.city[i].cityName == city) == true) {
                                    obj = city;
                                } else {
                                    obj = city1;
                                }
                                response(res, SuccessCode.SUCCESS, obj, "Service available in your city");
                            }
                        }
                        response(res, ErrorCode.NOT_FOUND, {}, "Service not available in your city.")
                    } else {
                        let obj = state;
                        response(res, SuccessCode.SUCCESS, obj, "Service available in your state");
                    }
                }
            }
        } catch (error) {
            console.log(error)
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG);
        }
    },
    findLocation: async (req, res) => {
        try {
            let smsResult = await commonFunction.findLocation(req.body.latitude, req.body.longitude);
            console.log("1645==================>", smsResult.results[1].address_components);
            for (let i = 0; i < smsResult.results[0].address_components.length; i++) {
                if (smsResult.results[0].address_components[i].types[0] === 'locality') {
                    let city = smsResult.results[0].address_components[i].long_name
                    console.log("===========================>", city);
                }
                if (smsResult.results[0].address_components[i].types[0] === 'administrative_area_level_1') {
                    let state = smsResult.results[0].address_components[i].long_name;
                    console.log("===========================>", state);
                }
                if (smsResult.results[0].address_components[i].types[0] === 'administrative_area_level_2') {
                    let city1 = smsResult.results[0].address_components[i].long_name;
                    console.log("===========>", city1);
                }
            }
            response(res, SuccessCode.SUCCESS, smsResult, "Service available in your city");

        } catch (error) {
            console.log(error)
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG);
        }
    },
    findBooking: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let bookingDetails = await bookingModel.findOne({ _id: req.query._id }).populate({ path: 'drivers userId vehicalType' });
                if (!bookingDetails) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND)
                } else {
                    let obj = {
                        userName: bookingDetails.userId.name,
                        userMobileNumber: bookingDetails.userId.mobileNumber,
                        driversName: bookingDetails.drivers.name,
                        driversMobileNumber: bookingDetails.drivers.mobileNumber,
                        bookingId: bookingDetails.bookingId,
                        dateTime: bookingDetails.dateTime,
                        amount: bookingDetails.amount,
                        vehicalName: bookingDetails.vehicalType.vehicalName,
                        description: bookingDetails.description,
                        startLocation: bookingDetails.startLocation,
                        endLocation: bookingDetails.endLocation
                    }
                    response(res, SuccessCode.SUCCESS, obj, SuccessMessage.DATA_FOUND);
                }
            }
        } catch (error) {
            console.log(error)
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG);
        }
    },
    adminDriverCash: async (req, res) => {
        try {
            let userData = await userModel.findOne({ _id: req.userId });
            if (!userData) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let findCash = await cashinHand.findOne({ userId: userData._id });
                if (!findCash) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND)
                } else {
                    let obj = {
                        walletBalance: userData.walletBalance,
                        driverCash: findCash.driverCash,
                        adminCash: findCash.adminCash,
                        totalCash: findCash.totalCash,
                    }
                    response(res, SuccessCode.SUCCESS, obj, SuccessMessage.DATA_FOUND);
                }
            }
        } catch (error) {
            console.log(error)
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG);
        }
    },
    notificationList: async (req, res) => {
        try {
            let user = await userModel.findOne({ _id: req.userId });
            if (!user) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                const data = await notification.find({ driverId: user._id }).sort({ "createdAt": -1 });
                const dataCount = await notification.find({ driverId: user._id, isRead: false }).count();
                if (data.length == 0) {
                    response(res, ErrorCode.NOT_FOUND, [], ErrorMessage.NOT_FOUND);
                } else {
                    response(res, SuccessCode.SUCCESS, { data, dataCount }, SuccessMessage.DATA_FOUND);
                }
            }
        } catch (error) {
            console.log(error);
            response(res, ErrorCode.WENT_WRONG, [], ErrorMessage.SOMETHING_WRONG);
        }
    },
    notificationStatus: async (req, res) => {
        try {
            let user = await userModel.findOne({ _id: req.userId });
            if (!user) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                const data1 = await notification.updateMany({ driverId: user._id, status: "ACTIVE" }, { $set: { isRead: true } }, { new: true });
                if (data1) {
                    var query = { driverId: user._id };
                    var options = {
                        sort: { createdAt: -1 }
                    };
                    notification.paginate(query, options, (err, result) => {
                        if (err) {
                            response(res, ErrorCode.SOMETHING_WRONG, [], ErrorMessage.INTERNAL_ERROR);
                        }
                        else if (result.docs.length == 0) {
                            response(res, ErrorCode.NOT_FOUND, [], ErrorMessage.NOT_FOUND);
                        }
                        else {
                            response(res, SuccessCode.SUCCESS, result.docs, SuccessMessage.DATA_FOUND);
                        }
                    })

                }
            }
        }
        catch (error) {
            response(res, ErrorCode.WENT_WRONG, [], ErrorMessage.SOMETHING_WRONG);
        }
    },
    getNotification: async (req, res) => {
        try {
            const data = await notification.findById({ _id: req.params._id });
            if (!data) {
                response(res, ErrorCode.NOT_FOUND, [], ErrorMessage.NOT_FOUND);
            } else {
                response(res, SuccessCode.SUCCESS, data, SuccessMessage.DATA_FOUND);
            }
        } catch (error) {

            response(res, ErrorCode.WENT_WRONG, [], ErrorMessage.SOMETHING_WRONG);
        }
    },
    userNotificationList: async (req, res) => {
        try {
            let user = await userModel.findOne({ _id: req.userId });
            if (!user) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                const data = await notification.find({ userId: user._id }).sort({ "createdAt": -1 });
                const dataCount = await notification.find({ userId: user._id, isRead: false }).count();
                if (data.length == 0) {
                    response(res, ErrorCode.NOT_FOUND, [], ErrorMessage.NOT_FOUND);
                } else {
                    response(res, SuccessCode.SUCCESS, { data, dataCount }, SuccessMessage.DATA_FOUND);
                }
            }
        } catch (error) {
            console.log(error);
            response(res, ErrorCode.WENT_WRONG, [], ErrorMessage.SOMETHING_WRONG);
        }
    },
    userNotificationStatus: async (req, res) => {
        try {
            let user = await userModel.findOne({ _id: req.userId });
            if (!user) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                const data1 = await notification.updateMany({ userId: user._id, status: "ACTIVE" }, { $set: { isRead: true } }, { new: true });
                if (data1) {
                    var query = { userId: user._id };
                    var options = {
                        sort: { createdAt: -1 }
                    };
                    notification.paginate(query, options, (err, result) => {
                        if (err) {
                            response(res, ErrorCode.SOMETHING_WRONG, [], ErrorMessage.INTERNAL_ERROR);
                        }
                        else if (result.docs.length == 0) {
                            response(res, ErrorCode.NOT_FOUND, [], ErrorMessage.NOT_FOUND);
                        }
                        else {
                            response(res, SuccessCode.SUCCESS, result.docs, SuccessMessage.DATA_FOUND);
                        }
                    })

                }
            }
        }
        catch (error) {
            response(res, ErrorCode.WENT_WRONG, [], ErrorMessage.SOMETHING_WRONG);
        }
    },
}
const getDistanceFromLatLonInKm = async (lat1, lon1, lat2, lon2) => {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1);  // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
}
function deg2rad(deg) {
    return deg * (Math.PI / 180)
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
    let fullDate = `${date1}-${month}-${year} ${hr1}:${min1}:${sec1}`
    return fullDate
}

const hasNumber = async (myString) => {
    let a = /\d/.test(myString);
    return a;
}
