const mongoose = require('mongoose');

const employeesSchema = new mongoose.Schema({
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
    manager_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"manager"
    }
},{timestamps:true})
const Employees = mongoose.model("employees",employeesSchema);
module.exports = Employees;