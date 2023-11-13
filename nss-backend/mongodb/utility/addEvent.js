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
      name:'Book collection Drive',
      organiser: 'SA office IIITD',
      venue: 'LHC',
      date: new Date('2023-12-31'), // Example date
      deadline: new Date('2023-12-02'), // Example deadline
      volunteers: [], // Initialize with an empty array
      picture: 'https://media.istockphoto.com/id/1318198538/photo/woman-puts-donations-in-a-box.jpg?s=612x612&w=0&k=20&c=XWa5VjQmm-5edFpwYP_O9uKa7MDii5SenuqjWCX7UE4=', // Example picture URL
      title: 'We are going to collect some books',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
