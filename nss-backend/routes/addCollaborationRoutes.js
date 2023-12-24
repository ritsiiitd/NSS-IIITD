import mongoose from "mongoose";
import Collaboration from '../mongodb/models/departments.js' ;
import express from "express";

import * as dotenv from 'dotenv';
const path = '../../.env'

dotenv.config({path});


const router = express.Router();
router.route('/').post(async(req,res)=>{
    try {
        // Connect to MongoDB (make sure you've already set up the connection)
        const CollaborationData = req.body;
        // Create a new Collaboration instance
        const domain = CollaborationData.domain;
        const newCollaboration = new Collaboration({
        //   CollaborationID:22,
          name:CollaborationData.name,
          image: CollaborationData.image,
          desc: CollaborationData.desc,
        });
        console.log(CollaborationData);
        const department = await Collaboration.findOne({ name: domain });
        department.organisations.push(newCollaboration);
        await department.save();
        const department2 = await Collaboration.findOne({ name: domain });
        console.log(department2);
        // Save the new Collaboration to the database
        const updatedCollaborations = await Collaboration.find();
        res.status(200).json({ success: true, data: updatedCollaborations });
        console.log('New Collaboration saved to department:', domain);
        // console.log('New Collaboration saved');
      } catch (error) {
        console.error('Error inserting new Collaboration:', error);
      }
});

export default router;