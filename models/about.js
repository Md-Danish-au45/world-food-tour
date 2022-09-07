const mongoose = require("mongoose");
const aboutSchema = new mongoose.Schema({
    name:{
        type:String
    }
})

const aboutModel = mongoose.model("about", aboutSchema)
module.exports = aboutModel;