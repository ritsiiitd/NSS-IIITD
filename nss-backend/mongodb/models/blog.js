import mongoose from 'mongoose';

const Blog = new mongoose.Schema({
    question:{type:String, required:true},
    answer:{type:String, required:true},
});

const BlogSchema = mongoose.model('Blog',Blog);

export default BlogSchema;