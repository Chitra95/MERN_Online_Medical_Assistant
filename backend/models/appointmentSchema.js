import mongoose from "mongoose"
import validator from "validator"


const appointmentSchema=new mongoose.Schema({
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
        minLength:[10,"Phone Number must contain at exact 10 digits!"],
        maxLength:[10,"Phone Number must contain at exact 10 digits!"]
    },
    nic:{
        type:String, 
        required:true,
        minLength:[12,"NIC must contain at exact 12 digits!"],
        maxLength:[12,"NIC must contain at exact 12 digits!"]
    },
    dob:{
        type: Date,
        required:[true,"DOB is required!"],  
    },
    gender:{
        type:String,
        required:true,
        enum:["Male","Female"],
    },
    appointment_date:{
        type: String,
        required:true
    },
    department:{
        type: String,
        required:true
    },
    doctor:{
        firstName:{
            type: String,
            required:true
        },
        lastName:{
            type: String,
            required:true
        }
    },
    hasVisited:{
        type:Boolean,
        default:false,
    },
    doctorId:{
        type: mongoose.Schema.ObjectId,
        required:true
    },
    patientId:{
        type: mongoose.Schema.ObjectId,
        required:true
    },
    address:{
        type: String,
        required:true
    },
    status:{
        type: String,
        enum:["Pending","Accepted","Rejected"],
        default: "Pending"
    }
},{ 
    timestamps: true 
});

export const Appointment = mongoose.model("Appointment",appointmentSchema);