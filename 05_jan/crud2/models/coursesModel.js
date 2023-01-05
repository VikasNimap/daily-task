const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    cname:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    students:[
        {type:'ObjectId',ref:'Student'}
    ]
},{timestamps:true})

const Course = mongoose.model('Course',courseSchema);
module.exports = Course;