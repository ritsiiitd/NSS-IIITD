import express from "express";
import * as dotenv from 'dotenv'
import Gallery from '../mongodb/models/gallery.js' ;

dotenv.config();

const router = express.Router();

//GET Gallery with GalleryId
router.route('/:GalleryId/:ImageId').get(async(req,res)=>{
    try {
        const GalleryId=req.params.GalleryId;
        const ImageId=req.params.ImageId;
        console.log("request from Gallery page",GalleryId,"image",ImageId);
        const gallery = await Gallery.findById(GalleryId);

        const image = gallery.images.id(ImageId);

        if (!image) {
            return res.status(404).json({ success: false, message: 'Image not found in the gallery' });
        }
        gallery.images.pull({ _id: ImageId });
        await gallery.save();
        console.log("Completed Request to delete image from Gallery with ID:", GalleryId);
       
        const galleryNW = await Gallery.findById(GalleryId);
        res.status(200).json({success: true, data:galleryNW});
        // res.status(200).json({success: true, data:Gallery});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message:error});
    }
})


export default router;