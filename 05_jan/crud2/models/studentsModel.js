const mongoose = require('mongoose');

const studentsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    }
},{timestamps:true})

const Student = mongoose.model("Student",studentsSchema);
module.exports = Student;