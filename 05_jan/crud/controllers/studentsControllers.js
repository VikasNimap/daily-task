const db = require('../models/index');
const students = db.students;

exports.createControllers = async(req,res)=>{
    const data = req.body;
    const response = await students.create(data);
    res.send({result:response});
}
exports.getStudents = async(req,res)=>{
    const response = await students.finaAndCountAll()
}