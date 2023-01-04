const models = require('../models/studentsModel');
const mongoose = require('mongoose');

exports.createStudents = async(req,res)=>{
    const data = req.body;
    const response = await models.create(data);
    res.send({result:response});
}
exports.getStudents = async(req,res)=>{
    const response = await models.find();
    res.send({result:response});
}
exports.updateStudents = async(req,res)=>{
    const userId = req.params.id;
    const data = req.body;
    const response = await models.findByIdAndUpdate({_id:userId},data);
    res.send({result:response});
}
exports.deleteStudents = async(req,res)=>{
    const userId = req.params.id;
    const response = await models.findByIdAndDelete({_id:userId},{isDeleted:true});
    res.send({result:response});
}