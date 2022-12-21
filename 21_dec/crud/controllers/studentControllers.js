const db = require('../models/index');
const { Op } = require("sequelize");
const jwt=require('jsonwebtoken')

const students = db.students;

exports.createStudents = async (req, res) => {
    const data = req.body;
    const response = await students.create(data);
    res.send({ 'msg': 'success', result: response });
}
exports.getStudents = async (req, res) => {
    const response = await students.findAll({
        // attributes: {
        //     exclude: ['id', 'lname', 'class','Students_id', 'contact', 'createdAt', 'updatedAt']
        // },
        // include: {
        //     model: db.course,
        //    attributes: ['cname', 'duration']
        // }
    });
    res.send({ 'msg': 'success', result: response });
}
exports.updateStudents = async (req, res) => {
    const userId = req.params.id;
    const data = req.body;
    const response = await students.update(data, { where: { id: userId } });
    res.send({ 'msg': 'success', result: response });
}
exports.deleteStudents = async (req, res) => {
    const userId = req.params.id;
    const response = await students.destroy({ where: { id: userId } });
    res.send({ 'msg': 'success', result: response });
}

exports.login=async (req,res)=>{
    const {email,password}=req.body
    const response=await students.findOne({where:{[Op.and]: [{ email: email }, { password: password }]}})
    const token=jwt.sign(response.contact,"vikash")
    res.send({token:token})

}

exports.getyourData=async (req,res)=>{
    const userId=req.params.id
    const data=await students.findOne({where:{id:userId}})
    res.send(data)
}