const userModel= require('../models/userModel');
const jwt=require('jsonwebtoken');
const { commonResponse: response } = require('../helper/commonResponseHandler');
const { ErrorMessage } = require('../helper/message');
const { ErrorCode } = require('../helper/statusCode');
const { SuccessMessage } = require('../helper/message');
const { SuccessCode } = require('../helper/statusCode');
module.exports={

    verifyToken:(req, res,next)=>{
        try{
            jwt.verify(req.headers.token,'texely',(err, result)=>{
                if(err){
                   response(res,ErrorCode.INTERNAL_ERROR,err,ErrorMessage.INTERNAL_ERROR)
                }
                else{
                    userModel.findOne({_id:result._id},(userErr, userResult)=>{
                        if(userErr){
                            response(res,ErrorCode.INTERNAL_ERROR,userErr,ErrorMessage.INTERNAL_ERROR)
                        }
                        else if(!userResult){
                           response(res,ErrorCode.NOT_FOUND,{},"Result not found.")
                        }
                        else{
                            if(userResult.status=="BLOCK"){
                                response(res,ErrorCode.REQUEST_FAILED,{},"Your account has been blocked by admin")
                            }
                            else if(userResult.status=="DELETE"){
                                response(res,ErrorCode.REQUEST_FAILED,{},"Your account has been deleted.")
                            }
                            else{
                                req.userId=userResult._id;
                                next();
                            }
                        }
                    })
                }
            })
        }
        catch(error){
            console.log(error);
           response(res,ErrorCode.WENT_WRONG,error,ErrorMessage.SOMETHING_WRONG)
        }
    }

}