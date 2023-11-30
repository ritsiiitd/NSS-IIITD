import mongoose from 'mongoose';

const Gallery = new mongoose.Schema({
    eventName:{type:String, required:true},
    organisations: [{
        driveLink: String, // image
    }],
});

const GallerySchema = mongoose.model('Gallery',Gallery);

export default GallerySchema;