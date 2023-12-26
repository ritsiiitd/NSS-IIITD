import express from "express";
import * as dotenv from 'dotenv'
// import {v2 as cloudinbary} from 'cloudinary';
import Blog from '../mongodb/models/blog.js' ;

dotenv.config();

const router = express.Router();

//GET Blog with BlogId
router.route('/:blogId').get(async(req,res)=>{
    try {
        const BlogId=req.params.blogId;
        console.log("request from Blog page",BlogId);
        const blog = await Blog.findByIdAndDelete(BlogId);
        console.log("Completed Request to delete Blog with ID:", BlogId);
        const updatedBlogs = await Blog.find();
      
        res.status(200).json({ success: true, data: updatedBlogs });
        // res.status(200).json({success: true, data:Blog});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message:error});
    }
})


export default router;