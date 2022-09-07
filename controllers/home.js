const express = require("express")
const homeModel = require("../models/home")

const getHome = async(req, res) => {
    res.sendFile("/home/danish/Desktop/project1 (copy)/public/html/home.html")
}

// post

const postHome = async(req, res) => {
    const data = req.body;
}

module.exports = {
    getHome
}