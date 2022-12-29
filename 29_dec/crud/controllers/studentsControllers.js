const db = require('../models/index');
const students = db.students;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
//CRUD operation
exports.createStudents = async(req,res)=>{
    const data = req.body;
    const salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(data.password,salt);
    const response = await students.create(data);
    res.send({result:response});
}
exports.getStudents = async(req,res)=>{
    const token = req.headers.token;
    const response = await students.findAll();
    res.send({result:response});
}
exports.updateStudents = async(req,res)=>{
    const student=req.student
    //const studentId=student.id
    console.log(student.dataValues.id);
    // return res.send(studentId.dataValues.id)
    // const userId = req.params.id;
    const data = req.body;
    const response = await students.update(data,{where:{id:student.dataValues.id}});
    res.send({result:response});
}
exports.deleteStudents = async(req,res)=>{
    const student = req.student.id;
    const response = await students.destroy({where:{id:student}});
    res.send({result:response});
}

//login
exports.login = async(req,res)=>{
    const {email,password} = req.body;
    const response = await students.findOne({where:{email:email}})
    const result = await bcrypt.compare(password,response.password);
    const token = jwt.sign(response.email,"Vikash");
    res.send({result:token})
}
exports.getYourData = async(req,res)=>{
    const student = req.student.id;
    const response = await students.findOne({where:{id:student}});
    res.send({result:response});
}