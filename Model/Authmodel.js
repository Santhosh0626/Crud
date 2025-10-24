const mongoose = require("mongoose")
const Schema = mongoose.Schema
const authSchema = new Schema({
    name:{
        type:String,
    },
    email:{
        type:String
    },
    phone:{
        type:Number
    },
    password:{
        type:String
    }
})
const Auth = mongoose.model("Authmodel",authSchema);
module.exports =Auth;