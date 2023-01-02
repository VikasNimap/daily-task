const { sequelize } = require('sequelize');
const db = require('../models/index');
const students = db.students;

exports.createStudents = async (req, res) => {
    try {
            const result = await sequelize.transaction(async (t) => {
                const data = req.body;
              const students = await students.create(data, { transaction: t })
          
              return students;
          
            });
    }
    catch (err) {
        console.log(`err ${err}`);
    }
}