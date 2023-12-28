import express from "express";
import * as dotenv from 'dotenv'
import Gallery from '../mongodb/models/gallery.js' ;

dotenv.config();

const router = express.Router();

//GET Gallery with GalleryId
router.route('/:GalleryId').get(async(req,res)=>{
    try {
        const GalleryId=req.params.GalleryId;
        console.log("request from Gallery page",GalleryId);
        const gallery = await Gallery.findByIdAndDelete(GalleryId);
        console.log("Completed Request to delete Gallery with ID:", GalleryId);
        const updatedGallerys = await Gallery.find();
      
        res.status(200).json({ success: true, data: updatedGallerys });
        // res.status(200).json({success: true, data:Gallery});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message:error});
    }
})


export default router;