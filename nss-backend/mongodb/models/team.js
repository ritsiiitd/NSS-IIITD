import mongoose from 'mongoose';

const Teams = new mongoose.Schema({
    name:{type:String, required:true},
    designation:{type:String, required:true},
    fb:{type:String, required:true},
    insta:{type:String, required:true},
    twitter:{type:String, required:true}
});

const TeamSchema = mongoose.model('Teams',Teams);

export default TeamSchema;