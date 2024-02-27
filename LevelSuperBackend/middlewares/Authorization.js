const authorAuthorization=(req,res,next)=>{
    if(req.body.role=="author"){
        next()
    }else{
        return res.status(404).send({"msg":"You are not authorized as a author"})

    }
}

const AdminAuthorization=(req,res,next)=>{
if(req.body.email=="admin@gmail.com" && req.body.role=="admin"){
    next()
}else{
    return res.status(404).send({"msg":"You are not authorized as a admin"})
}
}

module.exports={
authorAuthorization,AdminAuthorization
}

