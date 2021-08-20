const mongoose = require("mongoose");
const validator = require("validator");

const userSchema=mongoose.Schema({
    uname:{
        type:String,
        minLength:3,
        required:true
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");
            }
        }
    },
    pnumber:{
        type:Number,
        required:true,
        min:10
    },
    messages:{
        type:String,
        required:true,
        min:5
    }

});

const User = mongoose.model("user",userSchema);
module.exports = User;