import mongoose from "mongoose";
import Gallery from '../models/gallery.js' ;
// import Event from '' ;

import * as dotenv from 'dotenv';
const path = '../../.env'
dotenv.config({path});
async function insertNewGallery() {
  try {
    // console.log(process.env.MONGODB_URL);
    // Connect to MongoDB (make sure you've already set up the connection)
    mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

    // Create a new event instance
    const newgallery = new Gallery({
      eventName:'Blood Donation Camp',
      images: [{driveLink: 'https://drive.google.com/drive/u/0/folders/1aiPV3kW1MkoQ5jWzpI2iWvnTfbAuoXsB'},], // Initialize with an empty array
    });

    // Save the new event to the database
    const savedGallery = await newgallery.save();

    console.log('New Gallery saved:', savedGallery);
  } catch (error) {
    console.error('Error inserting new gallery:', error);
  } finally {
    // Close the MongoDB connection
    await mongoose.disconnect();
  }
}

// Call the function to insert a new event
insertNewGallery();
