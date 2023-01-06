const mongoose = require('mongoose');

const managerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    employees_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"employees"
    }
},{timestamps:true})

const Manager = mongoose.model("manager",managerSchema);
module.exports = Manager;