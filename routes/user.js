const express = require("express");
const { getAbout, getContactMe, postContactMe } = require("../controllers/about");
const { getContact, postContact } = require("../controllers/contact");
const { getHome } = require("../controllers/home");
const { postSignup, getSignup, getLogin, loginController } = require("../controllers/login");
const { getService } = require("../controllers/service");

const userRouter = express.Router()



// home

userRouter.get("/home",getHome)

// post contact

userRouter.post("/contact", postContact)

// post signup

userRouter.post("/signup",postSignup)

// get signup
userRouter.get("/signup",getSignup)

// get login
userRouter.get("/login",getLogin)

// post login

userRouter.post("/login",loginController)



// making routes

userRouter.get('/contact',getContact)

// making about routes

userRouter.get("/about",getAbout)

// making service routes
userRouter.get("/service",getService)

// making contact me route
userRouter.get("/contactMe",getContactMe)
userRouter.post("/contactMe",postContactMe)



module.exports = userRouter;
