const model = require('../models/studentsModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.createStudents = async(req,res)=>{
    const data = req.body;
    const salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(data.password,salt);
    const response = await model.create(data);
    res.send({result:response});
}
exports.getStudents = async(req,res)=>{
    const response = await model.find().populate('courses_id').select({password:0,createdAt:0,updatedAt:0});
    res.send({result:response});
}
exports.deleteStudents = async(req,res)=>{
    const userId = req.params.id;
    const response = await model.findByIdAndDelete({_id:userId});
    res.send({result:response});
}
exports.login = async(req,res)=>{
    const {email,password} = req.body;
    const response = await model.findOne({email:email,pa});
    const token = jwt.sign(response.email,"Vikash");
    res.send({result:token});
}