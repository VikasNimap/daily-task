const db = require('../models/index');
const client = require('../redis')
const students = db.students;
const redis = require('../redis');

exports.createStudents = async (req, res) => {
    const body = req.body;
    const response = await students.create(body);
    const userData = JSON.stringify(response);
    const store = await client.set('students', userData);
    res.send({ result: response });
}
exports.getStudents = async (req, res) => {
    const response1 = await students.findAll({
        attributes: {
            exclude: ['id','createdAt', 'updatedAt']
        },
        include: {
             model: db.courses,
            attributes: [ 'duration','cname']
        }
    });
    const value = await client.get('students')//.then(val => val.data);
    const data = JSON.parse(value);
    console.log(data) // "hello"
    res.send({ result: response1 });
}
// exports.updateStudents = async(req,res)=>{
//     const userId = req.params.id;
//     const data = req.body;
//     const response = await students.update(data,{where:{id:userId}});
//     res.send(response)
// }