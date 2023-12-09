import mongoose from "mongoose";
import Testimonies from '../models/testimonies.js' ;
// import Event from '' ;

import * as dotenv from 'dotenv';
const path = '../../.env'
dotenv.config({path});
async function insertTestimoniesMember() {
  try {
    // Connect to MongoDB (make sure you've already set up the connection)
    mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

    // Create a new event instance
    const newEvent = new Testimonies({
        name:'Bhaskar Singh',
        image:'https://bootdey.com/img/Content/avatar/avatar.png',
        value:'Was a good experience, volunteers were very enthusiastic and the doctors and nursing staff were professional',
        fb:'',
        insta:'',
        github:'https://github.com/vatsal20148',
        linkedin:'https://www.linkedin.com/in/ritick-chaudhary-8a47251a9/',
       
    });
    // const newEvent = new Testimonies({
    //     name:'Nayan Dwivedi',
    //     designation:'Creatives Coordinator',
    //     pic:'https://bootdey.com/img/Content/avatar/avatar1.png',
    //     github:'#',
    //     linkedin:'https://www.linkedin.com/in/nayan-dwivedi-3213aa216/',
    // });

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
insertTestimoniesMember();
