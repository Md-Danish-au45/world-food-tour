const express = require("express");
const aboutModel = require("../models/about")

// get about

const getAbout = (req, res) =>{
    res.sendFile("/home/danish/Desktop/project1 (copy)/public/html/about.html")
}

// post about

const postAbout = (req, res) =>{
    const data = res.body;
}

const getContactMe = (req, res) =>{
    res.sendFile("/home/danish/Desktop/project1 (copy)/public/html/contact-me.html")

}

const postContactMe = (req, res)=>{
    res.data = res.body;
}

module.exports = {
    getAbout,getContactMe,postContactMe,postAbout
}