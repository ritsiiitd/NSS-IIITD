import mongoose from 'mongoose';

const Department = new mongoose.Schema({
    name:{type:String, required:true},
    image:{type:String},
    organisations: [{
        type: String, // image
        type: String, // name
    }],
});

const DepartmentSchema = mongoose.model('Department',Department);

export default DepartmentSchema;