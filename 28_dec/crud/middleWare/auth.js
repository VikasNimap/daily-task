const db = require('../models/index');
const jwt = require('jsonwebtoken');


exports.middleWare = async (req, res, next) => {
    try {
        const token = req.headers.token;
        if (!token) {
            res.send('Error: Enter token');
            throw new Error('enter token');
        }
        const decode = jwt.decode(token, "Vikash");
        const data = await db.employees.findOne({ where: { email: decode } });
        if (req.params.id != data.id) {
            return res.send(`user is not valid`)
        }
        next()
    }
    catch (err) {
        console.log(err);
    }
}