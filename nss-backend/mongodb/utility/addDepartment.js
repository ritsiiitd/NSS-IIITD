import mongoose from "mongoose";
import Department from '../models/departments.js' ;
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
    const newDepartmentData = new Department({
        name: 'Environment',
        image: '',
        organisations: [
          {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/NSS-symbol.jpeg/600px-NSS-symbol.jpeg',
            name: 'NSS-IIITD',
            desc: 'NSS-IIITD stands for National Service Scheme governing inside the premises and under the name of Indraprastha Insttitue Of Information Technology Delhi',
          },
          // Add more organisations as needed
        ],
      });
    // Save the new event to the database
    const savedGallery = await newDepartmentData.save();

    console.log('New Collab saved:', savedGallery);
  } catch (error) {
    console.error('Error inserting new collab:', error);
  } finally {
    // Close the MongoDB connection
    await mongoose.disconnect();
  }
}

// Call the function to insert a new event
insertNewGallery();
