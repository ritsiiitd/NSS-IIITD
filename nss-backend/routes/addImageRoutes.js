import mongoose from "mongoose";
import GalleryModel from '../mongodb/models/gallery.js' ;
import express from "express";
import * as dotenv from 'dotenv';
const path = '../../.env'
dotenv.config({path});

// const GalleryModel = mongoose.model('Gallery', Gallery);

const router = express.Router();

// Utility function to update images for a particular event
router.route('/').post(async(req,res)=>{
    try {
        // const GalleryId=req.params.GalleryId;
        // Connect to MongoDB
        // Fetch the event by eventName
        const { galleryId, driveLinks } = req.body;

        const gallery = await GalleryModel.findById(galleryId);

        if (!gallery) {
            console.error(`Event with galleryid ${galleryId} not found.`);
            return res.status(404).json({ success: false, message: `Gallery with galleryId ${galleryId} not found.` });
        }


        // Fetch file IDs and convert to usable links
        const updatedImages = await Promise.all(driveLinks.split(',').map(async (driveLink) => {
            const fileId = await getFileIdFromDriveLink(driveLink);
            return { driveLink: convertToUsableLink(fileId) };
        }));

        // // Update the images array
        gallery.images = [...gallery.images, ...updatedImages];

        // // Save the updated document
        await gallery.save();

        const stats = await GalleryModel.find({});
        // console.log(stats);
        res.status(200).json({success: true, data:stats});
    } catch (error) {
        console.error('Error updating images:', error);
    }
});


// Function to fetch file ID from Google Drive link
async function getFileIdFromDriveLink(driveLink) {
    const matches = driveLink.match(/\/d\/([a-zA-Z0-9-_]+)/);
    return matches ? matches[1] : null;
}

// Function to convert file ID to usable link
function convertToUsableLink(fileId) {
    if (!fileId) {
        return null;
    }
    // Modify this URL pattern based on how your images are shared on Google Drive
    return `https://drive.google.com/uc?id=${fileId}`;
}

// Example usage:

// const eventName = 'Blood Donation Camp';
// const driveLinks = ["https://drive.google.com/file/d/1B1JIr1F3tTvdzk7At3ynEyU-hN114ceV/view?usp=drive_link", "https://drive.google.com/file/d/1WRM0-2_mX8tmbm6L1FAu0em9x2yzoAYD/view?usp=drive_link","https://drive.google.com/file/d/15MdzDMbKvKmGQVW4fMAykcICMeyrdlMD/view?usp=drive_link","https://drive.google.com/file/d/19cOtgoyRaKqNlRzDatyVApEIbkTGqq2Y/view?usp=drive_link","https://drive.google.com/file/d/1y7ZQlBh_M16sCZck5TXZqBbIrsvpKX3K/view?usp=drive_link","https://drive.google.com/file/d/1x4xbGIP_HsQz2AoYOWhJiLHA0ac3KXPY/view?usp=drive_link","https://drive.google.com/file/d/1wEstwtFxkt837iB6QTPwMvc_5Wa4CydS/view?usp=drive_link", "https://drive.google.com/file/d/1vflW7sBAMWV6z0FX0uNm2fp06YyF2VEK/view?usp=drive_link","https://drive.google.com/file/d/1uae8idgldatX5wywMh2svqsjahJAcvWs/view?usp=drive_link","https://drive.google.com/file/d/1rRTZIFnNn4Ee4a6ea8akN2Xy9bM1Xn0a/view?usp=drive_link","https://drive.google.com/file/d/1pXkZ_rT1-E2g6SMehPVKrrg8C6IKE_UN/view?usp=drive_link","https://drive.google.com/file/d/1mYYdc4QLPOWThHrA_ZEJ8C8Mi2ykDA29/view?usp=drive_link","https://drive.google.com/file/d/1jwPZrSGBk89lvEAilTBJebKctAb72PMb/view?usp=drive_link", "https://drive.google.com/file/d/1ZZLV1yr_vXEipDx7Alv60a9ZDkcP_bGJ/view?usp=drive_link","https://drive.google.com/file/d/1V7VPKzNxG9i8-phKxWdH3akxTpRS-30M/view?usp=drive_link","https://drive.google.com/file/d/1V2A3c-x_0BbAGGiE26ssPWqPg0etA7XS/view?usp=drive_link","https://drive.google.com/file/d/1UKzW7seDBCDVCwut1BTX8-r6n19TxUZO/view?usp=drive_link","https://drive.google.com/file/d/1TXyF97YUkggwPXVoL7us3MueD44Gh0vZ/view?usp=drive_link","https://drive.google.com/file/d/1NTp6cpIGmiSriKPZDXhvSA4uTQc7B7wY/view?usp=drive_link","https://drive.google.com/file/d/1MzVUVLYWs-A8on1Mp-ZJm7mreIVgJiul/view?usp=drive_link","https://drive.google.com/file/d/1LlCYuN0oMbQ19VFYurBwLpScB5a-m1wf/view?usp=drive_link","https://drive.google.com/file/d/1JWhutkzI0yemJ2XfDkXVD2PL0JxLIfRQ/view?usp=drive_link", "https://drive.google.com/file/d/16ANtOpwN31H82lEf7wRKMWmdxalYJnjs/view?usp=drive_link","https://drive.google.com/file/d/1GwNW1P7pGgBTDb4nvWYKixKWW9NmcTmf/view?usp=drive_link","https://drive.google.com/file/d/1zAAUs7S7tIvxeWWnCjNXlhtG1WpVS2NG/view?usp=drive_link","https://drive.google.com/file/d/1wGJ-9lYqkbRuombaVq42AhIi4Ckn1SoN/view?usp=drive_link","https://drive.google.com/file/d/1vtUujYLnPBN3f_KaADBfoiUTWC-Q04jg/view?usp=drive_link","https://drive.google.com/file/d/1tzvOnW6brqOYMXHI3e_pIKjXjWwpzKUv/view?usp=drive_link"]
// updateImages(eventName, driveLinks);


export default router;