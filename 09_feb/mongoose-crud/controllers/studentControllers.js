const db = require('../models/studentSchema');
exports.createStudents = async (req, res) => {
    const data = req.body;
    const response = await db.create(data);
    res.send({ result: response });
}
exports.getStudents = async (req, res) => {
    const page = req.params.page;
    const response = await db.find({ isDeleted: false }).skip(2 * (page - 1)).limit(2);//3
    res.send({ result: response });
}
exports.updateStudents = async (req, res) => {
    const userId = req.params.id;
    const data = req.body;
    const response = await db.findByIdAndUpdate({ _id: userId }, { $set: data });
    res.send({ result: response });
}
exports.deleteStudents = async (req, res) => {
    const userId = req.params.id;
    const response = await db.updateOne({ _id: userId }, { $set: { isDeleted: true } });
    res.send({ result: response });
}
