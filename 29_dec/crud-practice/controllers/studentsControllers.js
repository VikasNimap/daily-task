const db =require('../models/index');
const students = db.students;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.createStudents = async(req,res)=>{
    const data = req.body;
    const salt =  await bcrypt.genSalt(10);
   data.password = await bcrypt.hash(data.password,salt);
   const response = await students.create(data);
   res.send({result:response});
}









exports.login = async(req,res)=>{
    const {email,password} = req.body;
    const response = await students.findOne({where:{email:email}});
    const decode = await bcrypt.compare(password,response.dataValues.password);
    if(decode){
        const token =  jwt.sign(response.email,"Vikash");
       return res.send({result:token});
    }
}