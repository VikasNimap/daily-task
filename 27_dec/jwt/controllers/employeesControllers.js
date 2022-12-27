const db = require('../models/index');
const employees = db.employees;
const {Sequelize, Op} = require("sequelize");
const jwt = require('jsonwebtoken');

exports.createEmployees = async(req,res)=>{
    const data = req.body;
    const response = await employees.create(data);
    res.send({result:response})
}
exports.getEmployees = async(req,res)=>{
    const response = await employees.findAll();
    res.send({result:response})
}
exports.updateEmployees = async(req,res)=>{
    const userId = req.params.id;
    const data = req.body;
    const response = await employees.update(data,{where:{id:userId}});
    res.send({result:response})
}
exports.deleteEmployees = async(req,res)=>{
    const userId = req.params.id;
    const response = await employees.destroy({where:{id:userId}})
    res.send({result:response})
}

exports.login = async(req,res)=>{
    const {email,password} = req.body;
    const response = await employees.findOne({where:{[Op.and]:{email:email,password:password}}})
    const token = jwt.sign(response.email,"Vikash")
    res.send({result:token})
}

exports.getYourData = async(req,res)=>{
    const userId = req.params.id;
    const response = await employees.findOne({where:{id:userId}})
    res.send({result:response})
}