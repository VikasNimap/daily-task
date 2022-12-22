const db = require('../models/index');
const courses = db.course;


exports.createCourses = async (req, res) => {
    const data = req.body;
    const response = await courses.create(data);
    res.send({ 'msg': 'success', result: response });
}
exports.getCourses = async (req, res) => {
    const response = await courses.findAll({
        // attributes: {
        //     exclude: ['id', 'createdAt', 'updatedAt']
        // },
        // include: {
        //     model: db.students,
        //      attributes: ['name', 'email']
        // }
    });
    res.send({ 'msg': 'success', result: response });
}
exports.updateCourses = async (req, res) => {
    const userId = req.params.id;
    const data = req.body;
    const response = await courses.update(data, { where: { id: userId } });
    res.send({ 'msg': 'success', result: response });
}
exports.deleteCourses = async (req, res) => {
    const userId = req.params.id;
    const response = await courses.destroy({ where: { id: userId } });
    res.send({ 'msg': 'success', result: response });
}