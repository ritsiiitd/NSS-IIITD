import express from "express";
import * as dotenv from 'dotenv'
// import {v2 as cloudinbary} from 'cloudinary';
import Event from '../mongodb/models/event.js' ;


dotenv.config();

const router = express.Router();


router.route('/').post(async (req, res) => {
    try {
    //   const {name, organiser, venue, date, deadline, volunteers, picture, organiserLogo, description
    //   } = req.body;
      const eventData = req.body;
      console.log(eventData);
  
      // Assuming the Event model is properly defined and imported from '../mongodb/models/event.js'
      const newEvent = new Event(eventData);
      await newEvent.save();
  
      res.status(201).json({ success: true, message: 'Event added successfully' });
    } catch (error) {
        console.log(error.message);

      res.status(500).json({ success: false, message: error.message });
    }
  });

  export default router;