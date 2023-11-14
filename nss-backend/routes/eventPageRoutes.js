import express from "express";
import * as dotenv from 'dotenv'
// import {v2 as cloudinbary} from 'cloudinary';
import Event from '../mongodb/models/event.js' ;

dotenv.config();

const router = express.Router();

//GET event with eventId
router.route('/:eventId').get(async(req,res)=>{
    try {
        const eventId=req.params.eventId;
        console.log("request from event page",eventId);
        const event = await Event.find({eventID:eventId});
        // console.log(event);
        res.status(200).json({success: true, data:event});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message:error});
    }
})


export default router;