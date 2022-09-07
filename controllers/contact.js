const express = require("express");
const contactModel = require("../models/contact")

const getContact = async(req, res) => {
    res.sendFile("/home/danish/Desktop/project1 (copy)/public/html/contact.html")
}

// post

const postContact = async(req, res) => {
    const data = req.body;
    //console.log(data)
    try{
        // console.log(req.body)
        const msgDetail = await contactModel.create(data)
        res.status(200).send({status:"success",msgDetail})
    }
    catch(err){

        res.send(err)
    }
}


module.exports = {
    getContact, postContact
}