const db = require('../models/index');
const studentCourse = db.studentCourse;

exports.createJunction = async(req,res)=>{
    const data = req.body;
    const response = await studentCourse.create(data);
    res.send({result:response});
}
exports.getJunction = async(req,res)=>{
    const response = await studentCourse.findAll();
    res.send(response);
}