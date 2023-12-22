import mongoose from "mongoose";
import Testimonies from '../mongodb/models/testimonies.js' ;
import express from "express";

import * as dotenv from 'dotenv';
const path = '../../.env'

dotenv.config({path});


const router = express.Router();
router.route('/').post(async(req,res)=>{
    try {
        // Connect to MongoDB (make sure you've already set up the connection)
        const TestimoniesData = req.body;
        // Create a new Testimonies instance
        const newTestimonies = new Testimonies({
        //   TestimoniesID:22,
          name:TestimoniesData.name,
          linkedin: TestimoniesData.linkedin,
          value: TestimoniesData.value,
          image: TestimoniesData.image,
          insta: TestimoniesData.insta,
          github: TestimoniesData.gihub, 
        });
    
        // Save the new Testimonies to the database
        const savedTestimonies = await newTestimonies.save();
        const updatedTestimoniess = await Testimonies.find();
        res.status(200).json({ success: true, data: updatedTestimoniess });
        console.log('New Testimonies saved');
      } catch (error) {
        console.error('Error inserting new Testimonies:', error);
      }
});

export default router;