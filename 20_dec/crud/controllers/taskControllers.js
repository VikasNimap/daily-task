const db = require('../models/index');
// const { Sequelize, Op } = require("sequelize");
const task = db.task;


exports.createTask = async (req, res) => {
    const data = req.body;
    const response = await task.create(data);
    res.send({ 'msg': 'success', result: response });
}
exports.getTask = async (req, res) => {
    let userId = req.params.id;
    const response = await task.findOne({
        where: { id: userId },
        attributes: { exclude: ['id', 'code', 'testing', 'live', 'createdAt', 'updatedAt'] },
        include: {
            model: db.Employees,
            attributes: ['Emp_name']
        }
    });
    res.send({ 'msg': 'success', result: response });
}
exports.updateTask = async (req, res) => {
    const userId = req.params.id;
    const data = req.body;
    const response = await task.update(data, { where: { id: userId } });
    res.send({ 'msg': 'success', result: response });
}
exports.deleteTask = async (req, res) => {
    const userId = req.params.id;
    const response = await task.destroy({ where: { id: userId } });
    res.send({ 'msg': 'success', result: response });
}