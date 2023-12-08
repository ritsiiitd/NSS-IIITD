import express from "express";
import * as dotenv from 'dotenv'
// import {v2 as cloudinbary} from 'cloudinary';
import Gallery from '../mongodb/models/gallery.js' ;

dotenv.config();

const router = express.Router();

//GET Gallery with GalleryId
router.route('/:galleryId').get(async(req,res)=>{
    try {
        const galleryId=req.params.galleryId;
        console.log("request from Gallery page",galleryId);
        const gallery = await Gallery.findById(galleryId);
        console.log("smtgh",gallery);
        res.status(200).json({success: true, data:gallery});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message:error});
    }
})


export default router;