import express from "express";
import * as dotenv from 'dotenv'
// import {v2 as cloudinbary} from 'cloudinary';
import Blog from '../mongodb/models/blog.js' ;


dotenv.config();

const router = express.Router();


router.route('/').post(async (req, res) => {
    try {
      const blogData = req.body;
      console.log(blogData);
  
      // Assuming the Event model is properly defined and imported from '../mongodb/models/event.js'
      const newBlog = new Blog(blogData);
      await newBlog.save();
  
      res.status(201).json({ success: true, message: 'Blog added successfully' });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  });

  export default router;