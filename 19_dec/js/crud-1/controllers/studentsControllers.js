const db = require('../models/index');
const {Op}=require("sequelize")
const students = db.child;

exports.createStudents = async(req,res)=>{
    const data = req.body;
    console.log(data);
    const response = await students.create(data);
    res.send({'message':'success',result:response});
}
exports.getStudents = async(req,res)=>{
    const response = await students.findAll();
    res.send({'message':'success',result:response});
}
exports.updateStudents = async(req,res)=>{
    const userId  = req.params.id;
    const data = req.body;
    const response = await students.update(data,{where:{id:userId}});
    res.send({'message':'success',result:response});
}
exports.deleteStudents = async(req,res)=>{
    const userId = req.params.id;
    const response = await students.destroy({where:{id:userId}});
    res.send({'message':'success',result:response});
}