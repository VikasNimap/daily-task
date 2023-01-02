const { sequelize } = require('../models/index');
const db = require('../models/index');
const students = db.students;
const courses = db.courses;

exports.createCourses = async (req, res) => {
    try {
        const result = await sequelize.transaction(async (t) => {
            const data = await courses.create({ cname: "Node",duration:6,students_id:1,email:"vikash@gmail.com"},
                { transaction: t })
        });
        const data = await courses.create({cname:"React",duration:7,students_id:2,email:"satendra@gmail.com"},
        {transaction:t});
        return courses
    }
    catch (err) {
        console.log(`err ${err}`);
    }
}
// exports.getStudents = async (req, res) => {
//     const transaction = await sequelize.transaction();
//     try {
//         const response = await students.findAll({ transaction: transaction });
//         await transaction.commit();
//         res.send({ result: response });
//     }
//     catch (err) {
//         await transaction.rollback();
//         res.send(`err ${err}`)
//     }
// }
// exports.updateStudents = async (req, res) => {
//     const transaction = await sequelize.transaction();
//     try {
//         const userId = req.params.id;
//         const data = req.body;
//         const response = await students.update(data, { where: { id: userId } });
//         await transaction.commit();
//         res.send({ result: response });
//     }
//     catch (err) {
//         console.log(`err ${err}`);
//         await transaction.rollback();
//     }
// }
// exports.deleteStudents = async (req, res) => {
//     const transaction = await sequelize.transaction();
//     try {
//         const userId = req.params.id;
//         const response = await students.destroy({ where: { id: userId } });
//         await transaction.commit();
//         res.send({ result: response });
//     }
//     catch (err) {
//         console.log(`err ${err}`);
//         await transaction.rollback();
//     }
// }