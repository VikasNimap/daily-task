const db = require('../models/index');
const students = db.students;
const { Sequelize, Op } = require("sequelize");
const jwt = require('jsonwebtoken');

exports.createStudents = async(req,res)=>{
    const {name,email,password} = req.body;
    const response = await students.create({name,email,password})
    res.send({data:response})
}
exports.getStudents = async(req,res)=>{
    const response = await students.findAll();//{where:{name:{[Op.like]:'%Vikash'}}});
    res.send({'msg':'success',result:response});
}
exports.updateStudents = async(req,res)=>{
    const userId = req.params.id;
    const data = req.body;
    const response = await students.update(data,{where:{id:userId}});
    res.send({'msg':'success',result:response});
}
exports.deleteStudents = async(req,res)=>{
    const userId = req.params.id;
    const response = await students.destroy({where:{id:userId}});
    res.send({'msg':'success',result:response});
}

exports.loginStudents = async(req,res)=>{
    const {email,password} = req.body;
    const response = await students.findOne({where:{[Op.and]:[{email:email},{password:password}]}});

    const token = jwt.sign(response.email,"secretKey",jwt.TokenExpiredError(2000))
    res.send({result:token})
}
exports.getData = async(req,res)=>{
    const userId = req.params.id;
    const data = await students.findOne({where:{id:userId}});
    res.send(data);
}