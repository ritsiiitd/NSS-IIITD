import mongoose from 'mongoose';

const Teams = new mongoose.Schema({
    name:{type:String, required:true},
    designation:{type:String, required:true},
    pic:{type:String, required:true},
    github:{type:String, required:true},
    linkedin:{type:String, required:true},
});

const TeamSchema = mongoose.model('Teams',Teams);

export default TeamSchema;