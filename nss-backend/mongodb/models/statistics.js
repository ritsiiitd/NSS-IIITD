import mongoose from 'mongoose';

const Statistics = new mongoose.Schema({
    stat:{type:String, required:true},
    value:{type:String, required:true},
});

const StatisticsSchema = mongoose.model('Statistics',Statistics);

export default StatisticsSchema;