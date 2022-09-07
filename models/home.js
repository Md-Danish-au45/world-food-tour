const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
    name:{
        type:String
    },
    image:{
        type:String
    }


})

const homeModel = ("home", homeSchema)
module.exports = homeModel