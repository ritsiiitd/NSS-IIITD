import mongoose from "mongoose";
import Gallery from '../mongodb/models/gallery.js' ;
import express from "express";

import * as dotenv from 'dotenv';
const path = '../../.env'

dotenv.config({path});


const router = express.Router();
router.route('/').post(async(req,res)=>{
    try {
        // Connect to MongoDB (make sure you've already set up the connection)
        const GalleryData = req.body;
        // Create a new Gallery instance
        const newGallery = new Gallery({
        //   GalleryID:22,
          eventName:GalleryData.name,
        });
    
        // Save the new Gallery to the database
        const savedGallery = await newGallery.save();
        const updatedGallerys = await Gallery.find();
        res.status(200).json({ success: true, data: updatedGallerys });
        console.log('New Gallery saved');
      } catch (error) {
        console.error('Error inserting new Gallery:', error);
      }
});

export default router;