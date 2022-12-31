const db = require('../models/index');
const courses = db.courses;

exports.create = async(req,res)=>{
    const data = req.body;
    const response = await courses.create(data);
    res.send({result:response});
}
exports.get = async(req,res)=>{
    const userId = req.params.id;
    const response = await courses.findOne({
        [{where:{id:userId}},
        attributes[{exclude:['id','createdAt','updatedAt','deletedAt']},
        include[{model:db.students,
        attributes:['name','node','react','php','email']}
        ]
    });
    res.send({result:response})
}
exports.update = async(req,res)=>{
    const courseId = req.params.id;
    const data = req.body;
    const response = await courses.update(data,{where:{id:courseId}});
    res.send({result:response});
}
exports.delete = async(req,res)=>{
    const courseId = req.params.id;
    const response = await courses.destroy({where:{id:courseId}});
    res.send({result:response});
}