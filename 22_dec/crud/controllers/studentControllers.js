const db = require('../models/index');
const students = db.students;

exports.createStudents = async (req, res) => {
    const data = req.body;
    const response = await students.create(data);
    res.send({ 'msg': 'success', result: response });
}
exports.getStudents = async (req, res) => {
    const response = await students.findAll({
        attributes: {
            exclude: ['id','createdAt', 'updatedAt']
        },
        include: {
             model: db.course,
            attributes: ['cname', 'email']
        }
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
