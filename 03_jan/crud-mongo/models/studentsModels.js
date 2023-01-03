const mongoose = require('mongoose');


const { Schema } = mongoose;

const studentsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true
    },
    isDeleted: {
         type: Boolean, 
         defaults: false }


},{timestamps:true})
module.exports=mongoose.model('students', studentsSchema)

// module.exports.students = students;