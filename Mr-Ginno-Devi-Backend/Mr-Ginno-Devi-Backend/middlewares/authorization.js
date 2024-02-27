const AdminAuthorization = async (req,res,next) => {
  try {
    if (req.body.role == "admin" && req.body.email == "admin@gmail.com") {
      next()
    } else {
      res.status(401).send({"msg":"You are not authorize for  admin routes"})
    }
  } catch (error) {
     console.log(error);
     res.status(500).send({ msg: "something went wrong", error });
  }
}

const HostAuthorization = async (req, res, next) => {
  try {
    if (req.body.role == "host") {
      next()
    } else {
      res.status(401).send({ "msg": "You are not authorize for  host routes" })
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({"msg":"something went wrong",error})
  }
}

module.exports = {
  HostAuthorization,AdminAuthorization
}