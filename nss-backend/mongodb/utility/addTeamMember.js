import mongoose from "mongoose";
import Team from '../models/team.js' ;
// import Event from '' ;

import * as dotenv from 'dotenv';
const path = '../../.env'
dotenv.config({path});
async function insertTeamMember() {
  try {
    // Connect to MongoDB (make sure you've already set up the connection)
    mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

    // Create a new event instance
    const newEvent = new Team({
        name:'Aabhas Chaddha',
        designation:'Volunteer coordinator',
        pic:'https://bootdey.com/img/Content/avatar/avatar.png',
        github:'#',
        linkedin:'https://www.linkedin.com/in/aabhas-chaddha-8863aa229/',
    });
    // const newEvent = new Team({
    //     name:'Nayan Dwivedi',
    //     designation:'Creatives Coordinator',
    //     pic:'https://bootdey.com/img/Content/avatar/avatar1.png',
    //     github:'#',
    //     linkedin:'https://www.linkedin.com/in/nayan-dwivedi-3213aa216/',
    // });

    // Save the new event to the database
    const savedEvent = await newEvent.save();

    console.log('New team member saved:');
  } catch (error) {
    console.error('Error inserting new event:', error);
  } finally {
    // Close the MongoDB connection
    await mongoose.disconnect();
  }
}

// Call the function to insert a new event
insertTeamMember();
