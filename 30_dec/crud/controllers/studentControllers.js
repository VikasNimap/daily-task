const db = require('../models/index');
const students = db.students;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { response } = require('express');
const {Op} = require('sequelize')

exports.createStudents = async(req,res)=>{
    const data = req.body;
    const salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(data.password,salt);
    const response = await students.create(data);
    res.send({result:response});
}
exports.getStudents = async(req,res)=>{
    const response = await students.findAll();
    res.send({result:response});
}
exports.updateStudents = async(req,res)=>{
    const userId = req.params.id;
    const data = req.body;
    const response = await students.update(data,{where:{id:userId}});
    res.send({result:response});
}
exports.deleteStudents = async(req,res)=>{
    const userId = req.params.id;
    const response = await students.destroy({where:{id:userId}});
    res.send({result:response});
}
exports.restoreStudents = async(req,res)=>{
    const userId = req.params.id;
    const response = await students.restore({where:{id:userId}});
    res.send({result:response})
}
exports.login = async(req,res)=>{
    const {email,password} = req.body;
    const response = await students.findOne({where:{email:email}})
    if(!response){
        return res.send(`please enter valid email and password.`)
    }
    const decode = await bcrypt.compare(password,response.dataValues.password);
    if(decode){
        const token = jwt.sign(response.email,"Vikash");
       return  res.send({result:token})
    }
}
exports.getYourData = async(req,res)=>{
    const userId =await  req.student
    console.log("userId:",userId);
    const response = await students.findOne({where:{id:userId.id}})
    res.send({result:response});
}