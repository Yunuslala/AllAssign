const jwt=require('jsonwebtoken')
require('dotenv').config();
const authorization=async(req, res, next) => {
      const token = req.headers.authorization;
      console.log(token);
      if(token){
        const decodedToken = jwt.verify(token,process.env.secret);
        if(decodedToken){
          console.log(decodedToken);
          req.body.dataid=decodedToken.dataid;
          next()
        }else{
          return res.status(404).send({"msg":"You are not authorized"})
        }
      }else{
        return res.status(401).send({"msg":"token must be needed for generating tickets... go for login or signup"})
      }
   
  };
  
  module.exports ={ authorization};