const express = require("express");
const signupModel = require("../models/login")
const jwt = require("jsonwebtoken")
const postSignup = async(req, res) => {
    const signupdData = req.body;
    console.log(signupdData)

    try{
        const signupDetails = await signupModel.create(signupdData)
        res.redirect("http://localhost:6500/login")
    }
    catch(err){
        res.send(err)
    }
}

const getSignup = (req, res) =>{
    res.sendFile("/home/danish/Desktop/project1 (copy)/public/html/signup.html")
}

// getting login data
const getLogin = (req, res) =>{
    res.sendFile("/home/danish/Desktop/project1 (copy)/public/html/login.html")
}

// posting login data and creating json token 
const loginController = async(req, res) =>{
    const {email, password} = req.body;
    try{
        const user = await signupModel.findOne(req.body)
        // if it is not user
        if (!user) {
            res.status(401).send({status:"error",msg:"entered email or password is wrong"})
        }
        const userPayload = {email}
        // generating comment
        const accessToken = jwt.sign(userPayload,process.env.AUTH_SECRET_KEY,{algorithm:'HS384',expiresIn:'5d'})
        res.cookie('jwt',accessToken,{maxAge:9000})
        res.redirect("http://localhost:6500/home")

    }
    catch(err){
        console.log(err)
        res.status(401).send({status:"error",msg:"login error"})
    }

}

const user2 = (req, res) => {
    res.sendFile("/home/danish/Desktop/project1/public/html/login2.html")
}

    


module.exports = {
    postSignup,
    getSignup,
    getLogin,
    loginController,
    user2
}