import express from "express";
import * as dotenv from 'dotenv'
// import {v2 as cloudinbary} from 'cloudinary';
import Faq from '../mongodb/models/faq.js' ;


dotenv.config();

const router = express.Router();


router.route('/').post(async (req, res) => {
    try {
      const faqData = req.body;
      console.log(faqData);
  
      // Assuming the Event model is properly defined and imported from '../mongodb/models/event.js'
      const newFaq = new Faq(faqData);
      await newFaq.save();
  
      res.status(201).json({ success: true, message: 'Faq added successfully' });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  });

  export default router;