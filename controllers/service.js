const express = require("express");
const aboutModel = require("../models/service")

// get about

const getService = (req, res) =>{
    res.sendFile("/home/danish/Desktop/project1 (copy)/public/html/service.html")
}

// post about

const postService = (req, res) =>{
    const data = res.body;
}

module.exports = {
    getService
}