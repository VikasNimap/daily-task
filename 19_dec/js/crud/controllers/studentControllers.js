const db = require('../models/index');
const student = db.student;

exports.createStudents = async(req,res)=>{
    const data = req.body;
    const response = await student.create(data);
    res.send({'message': 'success',result:response});
}
exports.getStudents = async(req,res)=>{
    const response = await student.findAll(
        {
         attributes: {exclude: ['password','phone','id','createdAt','updatedAt']},
        include:{
        model:db.teacher,
        attributes:["fname",'lname']
        }
    }
    );
    res.send({'message':'success',result:response})
}
exports.updateStudents = async(req,res)=>{
    const userId = req.params.id;
    const data = req.body;
    const response = await student.update(data,{where:{id:userId}});
    res.send({'message':'success',result:response});
}
exports.deleteStudents = async(req,res)=>{
    const userId = req.params.id;
    const response = await student.destroy({where:{id:userId}});
    res.send({'message':'success',result:response});
}