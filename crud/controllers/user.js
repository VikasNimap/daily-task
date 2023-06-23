const db = require('../database');
exports.getUser = async (req, res) => {
    const response = await db.user.find();
    console.log(response);
}