const jwt = require("jsonwebtoken")
const auth = require("../models/login")
const authMiddleware = (req, res, next) => {

// verification of token
    const token = req.cookies.jwt
    // console.log(req.cookies)
    if(token){
        try{
            const userData = jwt.verify(token, process.env.AUTH_SECRET_KEY)
            next()
        }
        catch(err){
            res.status(404).send({status:"error", msg:"token not verified..."})
        }
    }
    else{

        res.status(401).send({status:"error",msg:"cannot fetch user"})
    }
}

module.exports = {
    authMiddleware
}