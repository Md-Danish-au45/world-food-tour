const mongoose = require("mongoose")
const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    }
})

const contactModel = mongoose.model("contacts", contactSchema)

module.exports = contactModel;