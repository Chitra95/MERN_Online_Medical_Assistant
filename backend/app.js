import express from "express";
import {config} from "dotenv"
import  cors from "cors"
import cookieParser from "cookie-parser"; 
import fileUpload from "express-fileupload";
// import { dbConnection } from "./database/dbConnection.js";
import messageRouter from "./router/messageRouter.js"
import mongoose from "mongoose"
import {errorMiddleware} from "./middlewares/errorMiddleware.js"
import userRouter from "./router/userRouter.js"
import appointmentRouter from "./router/appointmentRouter.js"



const app=express();
config({ path: "./config/config.env"});


//MongoDb Connection
mongoose.connect('mongodb://127.0.0.1:27017/hospital') //'mongodb://127.0.0.1:27017/blogify'
.then(e=>console.log("Mongodb Connected Successfully"));



//creating middleware to connect with frontend
app.use(cors({
    origin:[process.env.FRONTEND_URL,process.env.DASHBOARD_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
})
);

//middleware to get our cookies
app.use(cookieParser());

//data comes in string passing it into json
app.use(express.json());

app.use(express.urlencoded({extended:true}));
//name(string) and date(date)  (datatypes) to recognize them

app.use(
    fileUpload({
    useTempFiles:true,
    tempFileDir:"/tmp/"
})
);


//for database
app.use("/api/v1/message",messageRouter)
app.use("/api/v1/user",userRouter)
app.use("/api/v1/appointment",appointmentRouter)

// dbConnection();



//always use errorMiddleware at the end
app.use(errorMiddleware);
export default app;