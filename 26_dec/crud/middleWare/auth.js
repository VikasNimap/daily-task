const jwt = require('jsonwebtoken');
const db = require('../models/index');
exports.middleware = async (req, res, next) => {
    const token = req.headers.token;
    const decode = jwt.decode(token, 'secretKey');
    const data = await db.students.findOne({ where: { email: decode } });
    if (req.params.id != data.id) {
        return res.send('user not allowed');
    }

    next();
}