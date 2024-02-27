const { staticschema } = require('../models/static');
const commissionModel = require('../models/commissionModel');
const userModel = require('../models/userModel');
const { commonResponse: response } = require('../helper/commonResponseHandler');
const { ErrorMessage } = require('../helper/message');
const { ErrorCode } = require('../helper/statusCode');
const { SuccessMessage } = require('../helper/message');
const { SuccessCode } = require('../helper/statusCode');
const commonFunction = require('../helper/commonFunction');
module.exports = {
    /**
    * Function Name :addStatic
    * Description   : addStatic
    *
    * @return response
   */
    addStatic: async (req, res) => {
        try {
            let adminResult = await userModel.findOne({ _id: req.userId, userType: "ADMIN" });
            if (!adminResult) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let findStatic = await staticschema.findOne({ Type: req.body.type, status: { $ne: "DELETE" } });
                if(findStatic){
                    response(res, ErrorCode.ALREADY_EXIST, {}, ErrorMessage.ALREADY_EXIST);
                }else{
                    const static = new staticschema({
                        title: req.body.title,
                        Type: req.body.type,
                        description: req.body.description,
                    });
                    const saveblogs = await static.save();
                    response(res, SuccessCode.SUCCESS, saveblogs, SuccessMessage.DATA_SAVED);
                }
            }
        } catch (error) {
            console.log(error);
            response(res, ErrorCode.WENT_WRONG, [], ErrorMessage.SOMETHING_WRONG);
        }

    },
    /**
     * Function Name :  getStaticContent
     * Description   :  getStaticContent in static management
     *
     * @return response
     */
    getstaticList: async (req, res) => {
        try {
            const data = await staticschema.find();
            if (data.length == 0) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND);
            } else {
                response(res, SuccessCode.SUCCESS, data, SuccessMessage.DATA_FOUND);
            }
        } catch (error) {
            console.log(error);
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG);
        }
    },
    /**
     * Function Name :  getStaticContent
     * Description   :  getStaticContent in static management
     *
     * @return response
     */
    getStaticContent: async (req, res) => {
        try {
            staticschema.findById({ _id: req.query._id }, (err, result) => {
                if (err) {
                    response(res, ErrorCode.INTERNAL_ERROR, err, ErrorMessage.INTERNAL_ERROR)
                }
                else if (!result) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND)
                }
                else {
                    response(res, SuccessCode.SUCCESS, result, SuccessMessage.DATA_FOUND)
                }
            })
        } catch (error) {
            console.log("error", error)
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    /**
    * Function Name :  getStaticContent
    * Description   :  getStaticContent in static management
    *
    * @return response
    */
    getStaticContentAPP: async (req, res) => {
        try {
            staticschema.findOne({ Type: req.query.Type }, (err, result) => {
                if (err) {
                    response(res, ErrorCode.INTERNAL_ERROR, err, ErrorMessage.INTERNAL_ERROR)
                }
                else if (!result) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND)
                }
                else {
                    response(res, SuccessCode.SUCCESS, result, SuccessMessage.DATA_FOUND)
                }
            })
        } catch (error) {
            console.log("error", error)
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    /** 
     * Function Name :  updateStaticContent
     * Description   :  updateStaticContent in static management
     *
     * @return response
     */
    updateStaticContent: async (req, res) => {
        try {
            let user = await userModel.findOne({ _id: req.userId, userType: "ADMIN" });
            if (!user) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let static = await staticschema.findOne({ _id: req.params._id });
                if (!static) {
                    response(res, ErrorCode.NOT_FOUND, ErrorMessage.dataNotFound, {})
                } else {
                    staticschema.findByIdAndUpdate({ _id: static._id }, { $set: req.body }, { new: true }, (err, result) => {
                        if (err) {
                            response(res, ErrorCode.INTERNAL_ERROR, err, ErrorMessage.INTERNAL_ERROR)
                        } else {
                            response(res, SuccessCode.SUCCESS, result, "Updated Successfully.")
                        }
                    })
                }
            }
        } catch (error) {
            console.log("error", error)
            response(res, ErrorCode.WENT_WRONG, { error }, ErrorMessage.SOMETHING_WRONG)
        }
    },
    deleteStaticData: async (req, res, next) => {
        try {
            let adminResult = await userModel.findOne({ _id: req.userId, userType: "ADMIN" });
            if (!adminResult) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            }
            else {
                let findVehicalType = await staticschema.findOne({ title: req.body.title });
                if (!findVehicalType) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND);
                } else {
                    let updates = await staticschema.findByIdAndDelete({ _id: findVehicalType._id });
                    if (updates) {
                        response(res, SuccessCode.SUCCESS, updates, SuccessMessage.DATA_SAVED)
                    }
                }
            }
        } catch (error) {
            response(res, ErrorCode.WENT_WRONG, error, ErrorMessage.SOMETHING_WRONG)
        }
    },
    addCommission: async (req, res) => {
        try {
            let adminResult = await userModel.findOne({ _id: req.userId, userType: "ADMIN" });
            if (!adminResult) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let totalCommission = Number(req.body.tax) + Number(req.body.Commission);
                let driverCommission = 100 - totalCommission;
                let obj = {
                    tax: Number(req.body.tax),
                    Commission: Number(req.body.Commission),
                    totalCommission: totalCommission,
                    driverCommission: driverCommission,
                    status: "BLOCKED"
                }
                const saveCommission = await commissionModel(obj).save();
                response(res, SuccessCode.SUCCESS, saveCommission, SuccessMessage.DATA_SAVED);
            }
        } catch (error) {
            console.log(error);
            response(res, ErrorCode.WENT_WRONG, [], ErrorMessage.SOMETHING_WRONG);
        }

    },
    viewCommission: async (req, res, next) => {
        try {
            let findCommission = await commissionModel.findById({ _id: req.query._id });
            if (!findCommission) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND);
            } else {
                response(res, SuccessCode.SUCCESS, findCommission, SuccessMessage.DATA_FOUND)
            }
        } catch (error) {
            return next(error)
        }
    },
    EditCommission: async (req, res, next) => {
        try {
            let adminResult = await userModel.findOne({ _id: req.userId, userType: "ADMIN" });
            if (!adminResult) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                console.log(req.params._id)
                let findCommission = await commissionModel.findOne({ _id: req.params._id });
                if (findCommission) {
                    console.log(findCommission)
                    if (req.body.tax == null || req.body.tax == undefined) {
                        let totalCommission = Number(findCommission.tax) + Number(req.body.Commission);
                        let driverCommission = 100 - totalCommission;
                        req.body.totalCommission = totalCommission;
                        req.body.driverCommission = driverCommission;
                        let updateCommission = await commissionModel.findByIdAndUpdate({ _id: findCommission._id }, { $set: req.body }, { new: true });
                        if (updateCommission) {
                            response(res, SuccessCode.SUCCESS, updateCommission, "Updated Successfully.")
                        }
                    } else if (req.body.Commission == null || req.body.Commission == undefined) {
                        let totalCommission = Number(req.body.tax) + Number(findCommission.Commission);
                        let driverCommission = 100 - totalCommission;
                        req.body.totalCommission = totalCommission;
                        req.body.driverCommission = driverCommission;
                        let updateCommission = await commissionModel.findByIdAndUpdate({ _id: findCommission._id }, { $set: req.body }, { new: true });
                        if (updateCommission) {
                            response(res, SuccessCode.SUCCESS, updateCommission, "Updated Successfully.")
                        }
                    } else {
                        let totalCommission = Number(req.body.tax) + Number(req.body.Commission);
                        let driverCommission = 100 - totalCommission;
                        req.body.totalCommission = totalCommission;
                        req.body.driverCommission = driverCommission;
                        let updateCommission = await commissionModel.findByIdAndUpdate({ _id: findCommission._id }, { $set: req.body }, { new: true });
                        if (updateCommission) {
                            response(res, SuccessCode.SUCCESS, updateCommission, "Updated Successfully.")
                        }
                    }
                } else {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND);
                }
            }
        } catch (error) {
            return next(error);
        }
    },
    deleteCommission: async (req, res, next) => {
        try {
            let adminResult = await userModel.findOne({ _id: req.userId, userType: "ADMIN" });
            if (!adminResult) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            }
            else {
                let findCommission = await commissionModel.findById({ _id: req.body._id });
                if (!findCommission) {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND);
                } else {
                    let allCommission = await commissionModel.find();
                    if (allCommission.length == 1) {
                        response(res, SuccessCode.SUCCESS, allCommission, "Only one commission data. Please first add more than one commission than you will blocked.")
                    } else {
                        if (findCommission.status == "ACTIVE") {
                            response(res, SuccessCode.SUCCESS, findCommission, "Please first blocked or active other commission than you will delete.")
                        } else {
                            let updates = await commissionModel.findByIdAndDelete({ _id: findCommission._id });
                            if (updates) {
                                response(res, SuccessCode.SUCCESS, updates, SuccessMessage.DATA_SAVED)
                            }
                        }
                    }
                }
            }
        } catch (error) {
            response(res, ErrorCode.WENT_WRONG, error, ErrorMessage.SOMETHING_WRONG)
        }
    },
    listCommission: async (req, res, next) => {
        try {
            let findCommission = await commissionModel.find();
            if (findCommission.length == 0) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND);
            } else {
                response(res, SuccessCode.SUCCESS, findCommission, SuccessMessage.DATA_FOUND)
            }
        } catch (error) {
            return next(error)
        }
    },
    activeBlockCommission: async (req, res, next) => {
        try {
            let adminResult = await userModel.findOne({ _id: req.userId, userType: "ADMIN" });
            if (!adminResult) {
                response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.USER_NOT_FOUND);
            } else {
                let findCommission = await commissionModel.findOne({ _id: req.params._id, status: "BLOCKED" });
                if (findCommission) {
                    let allCommission = await commissionModel.find();
                    if (allCommission.length == 1) {
                        response(res, SuccessCode.SUCCESS, allCommission, "Only one commission data. Please first add more than one commission than you will blocked.")
                    } else {
                        for (let i = 0; i < allCommission.length; i++) {
                            console.log((allCommission[i]._id).toString() == (findCommission._id).toString())
                            if ((allCommission[i]._id).toString() == (findCommission._id).toString() == true) {
                                await commissionModel.findByIdAndUpdate({ _id: findCommission._id }, { $set: { status: "ACTIVE" } }, { new: true });
                            } else {
                                await commissionModel.findByIdAndUpdate({ _id: allCommission[i]._id }, { $set: { status: "BLOCKED" } }, { new: true });
                            }
                        }
                        let all = await commissionModel.find();
                        response(res, SuccessCode.SUCCESS, all, "Updated Successfully.")
                    }
                } else {
                    response(res, ErrorCode.NOT_FOUND, {}, ErrorMessage.NOT_FOUND);
                }
            }
        } catch (error) {
            return next(error)
        }
    }
}
