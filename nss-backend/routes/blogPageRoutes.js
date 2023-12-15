import express from "express";
import * as dotenv from 'dotenv'
// import {v2 as cloudinbary} from 'cloudinary';
import Blog from '../mongodb/models/blog.js' ;

dotenv.config();

const router = express.Router();

//GET Blog with blogId
router.route('/:blogId').get(async(req,res)=>{
    try {
        const blogId=req.params.blogId;
        console.log("request from Blog page",blogId);
        const blog = await Blog.findById(blogId);
        // console.log(Blog);
        res.status(200).json({success: true, data:blog});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message:error});
    }
})


export default router;