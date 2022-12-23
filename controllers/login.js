const express = require("express");
const bcrypt = require("bcrypt");
const signupModel = require("../models/login")
const loginModel = require("../models/signup")
const jwt = require("jsonwebtoken")
const postSignup = async(req, res) => {
    const signupdData = req.body;
    hashpass= await bcrypt.hash(signupdData.password,5)
    signupdData.password=hashpass
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
    res.sendFile("/home/danish/Desktop/projects/project1 (copy)/public/html/signup.html")
}

// getting login data
const getLogin = (req, res) =>{
    res.sendFile("/home/danish/Desktop/projects/project1 (copy)/public/html/login.html")
}

// posting login data and creating json token 
const loginController = async(req, res) =>{
    const {email, password} = req.body;
    console.log(req.body)
    try{
        const user = await signupModel.findOne({email})
        // if it is not user
        if (!user) {
            res.status(401).send({status:"error",msg:"entered email or password is wrong"})
        }
        const match = await bcrypt.compare(password, user.password);

    if (!match) {
      res.status(401).send({ status: 'error', msg: 'Invalid Password' })
    }
        const userPayload = {email}
        // generating comment
        // console.log(accessToken)
        const accessToken = jwt.sign(userPayload,process.env.AUTH_SECRET_KEY,{algorithm:'HS384',expiresIn:'50d'})
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