const db = require('../models/index');
const students = db.students;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.createStudents = async(req,res)=>{
    const data = req.body;
    const salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(data.password,salt);
    const response = await students.create(data);
    res.send({result:response});
}
exports.getStudents = async(req,res)=>{
    try{
        const userId = req.student;
        const response = await students.findOne({where:{id:userId.id}});
       return  res.send({result:response});

    }
    catch(err){
        return res.send(`token not found ${err}`)
    }
}
exports.updateStudents = async(req,res)=>{
    try{
        const userId = req.student;
        const data = req.body;
        const response = await students.update(data,{where:{id:userId.id}});
        res.send({result:response});
    }
    catch(err){
        return res.send(`cannot update ${err}`)
    }
}

exports.login = async(req,res)=>{
    const {email,password} = req.body;
    if(!email){
        return res.send(`enter  email & password.`)
    }
    const response = await students.findOne({where:{email:email}})
    const result = await bcrypt.compare(password,response.password);
    const token = await jwt.sign(response.email,"Vikash");
    res.send({result:token});
}