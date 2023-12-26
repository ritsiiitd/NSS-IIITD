import mongoose from "mongoose";
import Team from '../mongodb/models/team.js' ;
import express from "express";

import * as dotenv from 'dotenv';
const path = '../../.env'

dotenv.config({path});


const router = express.Router();
router.route('/').post(async(req,res)=>{
    try {
        // Connect to MongoDB (make sure you've already set up the connection)
        const TeamData = req.body;
        // Create a new Team instance
        const newTeam = new Team({
        //   TeamID:22,
          name:TeamData.name,
          linkedin: TeamData.linkedin,
          pic: TeamData.pic,
          github: TeamData.github,
          insta: TeamData.insta,
          designation: TeamData.designation, 
        });
    
        // Save the new Team to the database
        const savedTeam = await newTeam.save();
        const updatedTeams = await Team.find();
        res.status(200).json({ success: true, data: updatedTeams });
        console.log('New Team saved');
      } catch (error) {
        console.error('Error inserting new Team:', error);
      }
});

export default router;