import mongoose from 'mongoose';

const Testimonies = new mongoose.Schema({
    name:{type:String, required:true},
    image:{type:String},
    value:{type:String, required:true},
    fb:{type:String},
    insta:{type:String},
    github:{type:String},
    linkedin:{type:String},
});

const TestimoniesSchema = mongoose.model('Testimonies',Testimonies);

export default TestimoniesSchema;