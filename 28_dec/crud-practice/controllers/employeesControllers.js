const db = require('../models/index');
const employees = db.employees;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {Sequelize, Op} = require('sequelize')

exports.createEmployees = async (req, res) => {
    const data = req.body;
    const salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(data.password, salt);
    const response = await employees.create(data);
    res.send({ result: response });
}
exports.getEmployees = async (req, res) => {
    const response = await employees.findAll();
    res.send({result:response});
}
exports.updateEmployees = async(req,res)=>{
    const userId = req.params.id;
    const data = req.body;
    const response = await employees.update(data,{where:{id:userId}});
    res.send({result:response});
}
exports.deleteEmployees = async(req,res)=>{
    const userId = req.params.id;
    const response = await employees.destroy({where:{id:userId}});
    res.send({result:response});
}

exports.login = async(req,res)=>{
    const {email,password} = req.body;
    const response = await employees.findOne({where:{email:email}});
    const result = await bcrypt.compare(password,response.password);
    console.log(response);
    const token = jwt.sign({ email: response.email, id: response.id},"Vikash");
    res.send({result:token})


}

exports.getYourData = async(req,res)=>{
    const userId = req.params.id;
    const response = await employees.findOne({where:{id:userId}});
    res.send({result:response});
}