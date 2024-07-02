import express from 'express';
import { getAllMessages, sendMessage } from '../controller/messageController.js';
import {isAdminAuthenticated} from "../middlewares/auth.js"

const router=express.Router();


router.post("/send",sendMessage); 
//                   fn that will run aftr /send  send krne ke baad

router.get("/getall",isAdminAuthenticated,getAllMessages)

export default router;