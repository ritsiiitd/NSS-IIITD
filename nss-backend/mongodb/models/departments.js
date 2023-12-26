import mongoose from 'mongoose';

const Department = new mongoose.Schema({
    name:{type:String, required:true},
    image:{type:String},
    organisations: [{
        image: { type: String },
        desc: { type: String },
        name: { type: String },
    }],
});

const DepartmentSchema = mongoose.model('Department',Department);

export default DepartmentSchema;