const VendorAuthorization=(req,res,next)=>{
        if(req.body.role=="Vendor"){
            next()
        }else{
            return res.status(404).send({"msg":"You are not authorized as a vendor"})

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
    VendorAuthorization,AdminAuthorization
}