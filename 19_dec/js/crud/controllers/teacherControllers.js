const db = require('../models/index');
const teachers = db.teacher;

exports.createTeachers = async(req,res)=>{
    const data = req.body;
    const response = await teachers.create(data);
    res.send({'message': 'success',result:response});
}
exports.getTeachers = async(req,res)=>{
    const response = await teachers.findAll(
        {
            attributes: {exclude: ['password','phone','id','createdAt','updatedAt']},
        include:{
        model:db.student,
        attributes:["fname",'lname']
        }
        }
    );
    res.send({'message':'success',result:response})
}
exports.updateTeachers = async(req,res)=>{
    const userId = req.params.id;
    const data = req.body;
    const response = await teachers.update(data,{where:{id:userId}});
    res.send({'message':'success',result:response});
}
exports.deleteTeachers = async(req,res)=>{
    const userId = req.params.id;
    const response = await teachers.destroy({where:{id:userId}});
    res.send({'message':'success',result:response});
}