import express from "express";
import * as dotenv from 'dotenv'
// import {v2 as cloudinbary} from 'cloudinary';
import Event from '../mongodb/models/event.js' ;
import updateEvent from './update.js';

dotenv.config();

const router = express.Router();

//GET event with eventId
router.route('/:eventId').post(async(req,res)=>{
    try {
        const eventId=req.params.eventId;
        console.log("request from event page",eventId);
        const userId = req.body.user.sub;
        const updateResult = await updateEvent.updateEvent(eventId, userId);
        // console.log("request from event page",updateResult);
        if (updateResult.success) {
            res.status(200).json({ success: true, message: 'Volunteer registered successfully', event: updateResult.dbevent });
          } else {
            res.status(500).json({ success: false, message: updateResult.message });
          }
      
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message:error});
    }
})


export default router;