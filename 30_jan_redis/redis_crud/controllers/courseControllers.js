const db = require('../models/index');
const courses = db.courses;

exports.createCourses = async(req,res)=>{
    const data = req.body;
    const response = await courses.create(data);
    res.send({result:response})
}
exports.getCourses = async(req,res)=>{
    const response = await courses.findOne({
        attributes: {
            exclude: ['id','createdAt', 'updatedAt']
        },
        include: {
             model: db.students,
            attributes: [ 'name','email']
        }
    });
    res.send({result:response});
}