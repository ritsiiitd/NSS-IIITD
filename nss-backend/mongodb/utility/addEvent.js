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
      eventID:12,
      name:'Horse collection Drive',
      organiser: 'SA office IIITD',
      venue: 'LHC',
      date: new Date('2023-12-31'), // Example date
      deadline: new Date('2023-12-02'), // Example deadline
      volunteers: [], // Initialize with an empty array
      picture: 'https://media.istockphoto.com/id/1318198538/photo/woman-puts-donations-in-a-box.jpg?s=612x612&w=0&k=20&c=XWa5VjQmm-5edFpwYP_O9uKa7MDii5SenuqjWCX7UE4=', // Example picture URL
      title: 'We are going to collect some books',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      organiserLogo: 'data:image/png;base64,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',
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
