import mongoose from "mongoose";
import Blog from '../mongodb/models/blog.js' ;
// import Blog from '' ;
import express from "express";
import moment from 'moment';

import * as dotenv from 'dotenv';
const path = '../../.env'

dotenv.config({path});


const router = express.Router();
router.route('/').post(async(req,res)=>{
    try {
        // Connect to MongoDB (make sure you've already set up the connection)
        const BlogData = req.body;
        // Create a new Blog instance
        const newBlog = new Blog({
        //   BlogID:22,
          author:BlogData.author,
          linkedin: BlogData.linkedin,
          title: BlogData.title,
          photo: BlogData.photo, // Example date
          content: BlogData.content, // Example deadline
        });
    
        // Save the new Blog to the database
        const savedBlog = await newBlog.save();
        const updatedBlogs = await Blog.find();
        res.status(200).json({ success: true, data: updatedBlogs });
        console.log('New Blog saved');
      } catch (error) {
        console.error('Error inserting new Blog:', error);
      }
});

export default router;