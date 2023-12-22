import express from "express";
import * as dotenv from 'dotenv'
import Testimonies from '../mongodb/models/testimonies.js' ;

dotenv.config();

const router = express.Router();

//GET Testimonies with TestimoniesId
router.route('/:TestimoniesId').get(async(req,res)=>{
    try {
        const TestimoniesId=req.params.TestimoniesId;
        console.log("request from Testimonies page",TestimoniesId);
        const testimonies = await Testimonies.findByIdAndDelete(TestimoniesId);
        console.log("Completed Request to delete Testimonies with ID:", TestimoniesId);
        const updatedTestimoniess = await Testimonies.find();
      
        res.status(200).json({ success: true, data: updatedTestimoniess });
        // res.status(200).json({success: true, data:Testimonies});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message:error});
    }
})


export default router;