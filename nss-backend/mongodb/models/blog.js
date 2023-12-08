import mongoose from 'mongoose';

const Blog = new mongoose.Schema({
    author:{type:String, required:true},
    title:{type:String, required:true},
    photo:{type:String, required:true},
    content:{type:String, required:true}
});

const BlogSchema = mongoose.model('Blog',Blog);

export default BlogSchema;