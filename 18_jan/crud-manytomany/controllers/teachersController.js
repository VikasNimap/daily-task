const db = require('../models/index');
const teachers = db.teachers;

exports.createTeacher = async(req,res)=>{
    const data = req.body;
    const response = await teachers.bulkCreate(data);
    res.send({result:response});
}
exports.getTeacher = async(req,res)=>{
    const response = await teachers.findAll();
    res.send({result:response});
}