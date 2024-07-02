import mongoose from "mongoose"
import validator from "validator"

const messageScheme=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3,"First Name must contain at least 3 Characters!"]
    },
    lastName:{
        type:String,
        required:true,
        minLength:[3,"Last Name must contain at least 3 characters!"]
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"Please provide a valid Email!"]
    },
    phone:{
        type:String, //String is given so that minLength & maxLength can be used
        required:true,
        minLength:[11,"Phone Number must contain at exact 11 digits!"],
        maxLength:[11,"Phone Number must contain at exact 11 digits!"]
    },
    message:{
        type:String, 
        required:true,
        minLength:[10,"Message must contain atleast exact 10 characters!"],
    },
    
});

//creating model
export const Message=mongoose.model("Message",messageScheme)