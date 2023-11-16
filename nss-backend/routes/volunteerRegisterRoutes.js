import express from "express";
import * as dotenv from 'dotenv'
// import {v2 as cloudinbary} from 'cloudinary';
import Event from '../mongodb/models/event.js' ;

dotenv.config();

const router = express.Router();


const updateEvent = async (eventId, userId) => {
    try {
      // Find the event by eventId
      const dbevent = await Event.findOne({ eventID: eventId });
  
      // Check if the event exists
      if (!dbevent) {
        return { success: false, message: 'Event not found' };
      }
  
      // Check if userId is already in the volunteer array
      if (dbevent.volunteers.includes(userId)) {
        return { success: false, message: 'User is already a volunteer for this event' };
      }
  
      // Add the userId to the volunteers array (assuming userId is a string)
      event.volunteers.push(userId);
  
      // Save the updated event
      await dbevent.save();
  
      return { success: true, message: 'Event updated successfully', event };
    
    } catch (error) {
      console.error('Error updating event and adding volunteer:', error);
      return { success: false, message: 'Error updating event and adding volunteer' };
    }
  };

//GET event with eventId
router.route('/:eventId').post(async(req,res)=>{
    try {
        const eventId=req.params.eventId;
        console.log("request from event page",eventId);
        console.log(req.body);
        const event = await Event.find({eventID:eventId});
        console.log("event");
        res.status(200).json({success: true, data:event});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message:error});
    }
})


export default router;