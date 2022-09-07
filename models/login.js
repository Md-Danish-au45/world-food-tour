const mongoose = require("mongoose");
const signupSchema = new mongoose.Schema({

    username:{
        type:String,
    },

    email:{
        type:String,
        
    },
    password:{
        type:Number,
    },
    repeat_password:{
        type:String,

    }

    

})


const signupModel = mongoose.model("signup", signupSchema)


module.exports= signupModel;