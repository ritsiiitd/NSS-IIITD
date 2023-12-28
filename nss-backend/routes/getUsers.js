import express from "express";
import * as dotenv from 'dotenv'
// import {v2 as cloudinbary} from 'cloudinary';
import User from '../mongodb/models/user.js' ;

dotenv.config();

const router = express.Router();

//GET all Statistics
router.route('/').get(async(req,res)=>{
    try {
        const stats = await User.find({});
        // console.log(stats);
        res.status(200).json({success: true, data:stats});
    } catch (error) {
        res.status(500).json({success: false, message:error});
    }
})

export default router;