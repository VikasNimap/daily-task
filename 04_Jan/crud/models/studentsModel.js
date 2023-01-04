const mongoose = require('mongoose');
const studentsSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        unique:true,
        required: true
    },
    password:{
        type:String,
        required: true

    },
    dept:{
        type:String,
        required: true
    },
    isDeleted: { 
        type: Boolean, 
        defaults: false,
    }
},{timestamps:true})

module.exports = mongoose.model("students",studentsSchema);