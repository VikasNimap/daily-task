const mongoose = require('mongoose');
const { populate } = require('../models/managerModel');
const model = require('../models/managerModel');

exports.createManager = async(req,res)=>{
    const response = await model.create(req.body);
    res.send({result:response});
}
exports.getManager = async(req,res)=>{
    const page = req.params.page;
    const response = await model.find().populate('employees_id').skip(3*(page-1)).limit(2).select({_id:0});
    const c = await model.find().count();
    res.send({result:response,c});
}
exports.updateManager = async(req,res)=>{
    const userId = req.params.id;
    const response = await model.findByIdAndUpdate({_id:userId});
    res.send({result:response});
}
exports.deleteManager = async(req,res)=>{
    const userId = req.params.id;
    const response = await model.findByIdAndDelete({_id:userId});
    res.send({result:response});
}