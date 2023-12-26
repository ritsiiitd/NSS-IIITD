import express from "express";
import * as dotenv from 'dotenv'
import Team from '../mongodb/models/team.js' ;

dotenv.config();

const router = express.Router();

//GET Team with TeamId
router.route('/:TeamId').get(async(req,res)=>{
    try {
        const TeamId=req.params.TeamId;
        console.log("request from Team page",TeamId);
        const team = await Team.findByIdAndDelete(TeamId);
        console.log("Completed Request to delete Team with ID:", TeamId);
        const updatedTeams = await Team.find();
      
        res.status(200).json({ success: true, data: updatedTeams });
        // res.status(200).json({success: true, data:Team});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message:error});
    }
})


export default router;