import mongoose from 'mongoose';
// import mongoose from "mongoose";
import GalleryModel from '../models/gallery.js' ;
import * as dotenv from 'dotenv';
const path = '../../.env'
dotenv.config({path});

// const GalleryModel = mongoose.model('Gallery', Gallery);

// Utility function to update images for a particular event
async function updateImages(eventName, driveLinks) {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

        // Fetch the event by eventName
        const gallery = await GalleryModel.findOne({ eventName });

        if (!gallery) {
            console.error(`Event with eventName ${eventName} not found.`);
            return;
        }

        // Fetch file IDs and convert to usable links
        const updatedImages = await Promise.all(driveLinks.map(async (driveLink) => {
            const fileId = await getFileIdFromDriveLink(driveLink);
            return { driveLink: convertToUsableLink(fileId) };
        }));

        // Update the images array
        gallery.images = updatedImages;

        // Save the updated document
        await gallery.save();

        console.log(`Images for event ${eventName} updated successfully.`);
    } catch (error) {
        console.error('Error updating images:', error);
    } finally {
        // Close the MongoDB connection
        await mongoose.disconnect();
    }
}


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

const eventName = 'Blood Donation Camp';
const driveLinks = ['https://drive.google.com/file/d/1V7VPKzNxG9i8-phKxWdH3akxTpRS-30M/view?usp=drive_link', 'https://drive.google.com/file/d/1y7ZQlBh_M16sCZck5TXZqBbIrsvpKX3K/view?usp=drive_link',];
updateImages(eventName, driveLinks);
