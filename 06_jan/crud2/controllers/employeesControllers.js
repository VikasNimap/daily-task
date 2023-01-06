const model = require('../models/employeesModel');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.createEmployees = async(req,res)=>{
    const response = await model.create(req.body);
    res.send({result:response});
}
exports.getEmployees = async(req,res)=>{
    const page = req.params.page;
    const response = await model.find().populate('manager_id').skip(3*(page-1)).limit(2);
    res.send({result:response})
}
exports.updateEmployees = async(req,res)=>{
    const userId = req.params.id;
    const data = req.body;
    const response = await model.findByIdAndUpdate({_id:userId},data);
    res.send({result:response})
}
exports.deleteEmployees = async(req,res)=>{
    const userId = req.params.id;
    const response = await model.findByIdAndDelete({_id:userId});
    res.send({result:response})
}