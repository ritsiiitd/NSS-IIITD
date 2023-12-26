import mongoose from "mongoose";
import Event from '../mongodb/models/event.js' ;
// import Event from '' ;
import express from "express";
import moment from 'moment';

import * as dotenv from 'dotenv';
const path = '../../.env'

dotenv.config({path});


const router = express.Router();
router.route('/').post(async(req,res)=>{
    try {
        // Connect to MongoDB (make sure you've already set up the connection)
        mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        const eventData = req.body;
        eventData.date = moment(eventData.date, 'DD/MM/YYYY').toDate();
        eventData.deadline = moment(eventData.deadline, 'DD/MM/YYYY').toDate();
        // Create a new event instance
        const newEvent = new Event({
        //   eventID:22,
          name:eventData.name,
          organiser: eventData.organiser,
          venue: eventData.venue,
          date: eventData.date, // Example date
          deadline: eventData.deadline, // Example deadline
          volunteers: [], // Initialize with an empty array
          description: eventData.description, // Initialize with an empty array
          title:eventData.title,
          picture: eventData.picture, // Example picture URL
          organiserLogo: eventData.organiserLogo,
        });
    
        // Save the new event to the database
        const savedEvent = await newEvent.save();
        const updatedEvents = await Event.find();
        res.status(200).json({ success: true, data: updatedEvents });
        console.log('New event saved');
      } catch (error) {
        console.error('Error inserting new event:', error);
      }
});

export default router;