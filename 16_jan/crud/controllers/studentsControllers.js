const db = require('../models/index');
const students = db.students;
const bcrypt = require('bcrypt');

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