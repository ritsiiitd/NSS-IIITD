import mongoose from 'mongoose';

const faq = new mongoose.Schema({
    question:{type:String, required:true},
    answer:{type:String, required:true},
});

const FaqSchema = mongoose.model('FAQs',faq);

export default FaqSchema;