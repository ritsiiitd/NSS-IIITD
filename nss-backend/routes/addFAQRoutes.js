import mongoose from "mongoose";
import FAQ from '../mongodb/models/faq.js' ;
// import FAQ from '' ;
import express from "express";
import moment from 'moment';

import * as dotenv from 'dotenv';
const path = '../../.env'

dotenv.config({path});


const router = express.Router();
router.route('/').post(async(req,res)=>{
    try {
        // Connect to MongoDB (make sure you've already set up the connection)
        const FAQData = req.body;
        // Create a new FAQ instance
        const newFAQ = new FAQ({
        //   FAQID:22,
          question:FAQData.question,
          answer: FAQData.answer,
        });
    
        // Save the new FAQ to the database
        const savedFAQ = await newFAQ.save();
        const updatedFAQs = await FAQ.find();
        res.status(200).json({ success: true, data: updatedFAQs });
        console.log('New FAQ saved');
      } catch (error) {
        console.error('Error inserting new FAQ:', error);
      }
});

export default router;