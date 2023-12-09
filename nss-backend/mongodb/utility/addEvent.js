import mongoose from "mongoose";
import Event from '../models/event.js' ;
// import Event from '' ;

import * as dotenv from 'dotenv';
const path = '../../.env'
dotenv.config({path});
async function insertNewEvent() {
  try {
    console.log(process.env.MONGODB_URL);
    // Connect to MongoDB (make sure you've already set up the connection)
    mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

    // Create a new event instance
    const newEvent = new Event({
      eventID:22,
      name:'Sustainable Solutions Showcase',
      organiser: 'NSS IIIT Delhi',
      venue: 'Online',
      date: new Date('2023-10-02'), // Example date
      deadline: new Date('2023-10-01'), // Example deadline
      volunteers: [], // Initialize with an empty array
      picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYkxW7o_lb0ng2eGo-Wh10B9RtbrIcLFcwaZ1SCvuBFtViYxxT0Tr8zED02yNQ-xOAGX0&usqp=CAU', // Example picture URL
      title: 'Dedicated to celebrating Gandhi Jayanti and supporting the Swachh Bharat Abhiyan initiative. ',
      description: 'The "Sustainable Solutions Showcase" was a 7-day competition hosted by NSS IIIT Delhi, that took place from October 2nd to October 9th. This event was dedicated to celebrating Gandhi Jayanti and supporting the Swachh Bharat Abhiyan initiative. Participants were invited to submit their creative solutions for maintaining clean living spaces and neighborhoods, all while promoting sustainable living practices in the form of a video or image. The event featured prizes, including Rs. 2000 for the First Prize, Rs. 1000 for the Second Prize. Submissions were engaging and innovative.',
      organiserLogo: 'https://upload.wikimedia.org/wikipedia/commons/9/90/NSS-symbol.jpeg',
    });

    // Save the new event to the database
    const savedEvent = await newEvent.save();

    console.log('New event saved:', savedEvent);
  } catch (error) {
    console.error('Error inserting new event:', error);
  } finally {
    // Close the MongoDB connection
    await mongoose.disconnect();
  }
}

// Call the function to insert a new event
insertNewEvent();
