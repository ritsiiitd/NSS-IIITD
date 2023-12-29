import express from "express";
import * as dotenv from 'dotenv'
import FAQ from '../mongodb/models/faq.js' ;

dotenv.config();

const router = express.Router();

//GET FAQ with FAQId
router.route('/:FAQId').get(async(req,res)=>{
    try {
        const FAQId=req.params.FAQId;
        console.log("request from FAQ page",FAQId);
        const faq = await FAQ.findByIdAndDelete(FAQId);
        console.log("Completed Request to delete FAQ with ID:", FAQId);
        const updatedFAQs = await FAQ.find();
      
        res.status(200).json({ success: true, data: updatedFAQs });
        // res.status(200).json({success: true, data:FAQ});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message:error});
    }
})


export default router;