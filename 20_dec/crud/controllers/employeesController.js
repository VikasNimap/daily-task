const db = require('../models/index');
const employees = db.Employees;

exports.createEmployees = async(req,res)=>{
    const data = req.body;
    const response = await employees.create(data);
    res.send({'msg':'success',result:response});
}
exports.getEmployees = async(req,res)=>{
    const response = await employees.findAll({
        attributes:{exclude:['id','Emp_experience','createdAt','updatedAt']},
        include:{model:db.task,
        attributes:['code','testing','live']}
    });
    res.send({'msg':'success',result:response});
}
exports.updateEmployees = async(req,res)=>{
    const userId = req.params.id;
    const data = req.body;
    const response = await employees.update(data,{where:{id:userId}});
    res.send({'msg':'success',result:response});
}
exports.deleteEmployees = async(req,res)=>{
    const userId = req.params.id;
    const response = await employees.destroy({where:{id:userId}});
    res.send({'msg':'success',result:response});
}