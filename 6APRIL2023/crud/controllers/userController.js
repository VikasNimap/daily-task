const db = require('../models/index');
const jwt = require('jsonwebtoken');

exports.createUser = async (req, res) => {
    const data = req.body;
    const response = await db.users.create(data);
    res.send(response)
}

exports.getUser = async (req, res) => {
    const response = await db.users.findAll();
    res.send(response)
}

exports.login = async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        const response = await db.users.findOne({ where: { email: email } });
        const pass = response.password;
        if (pass) {
            const signature = jwt.sign(response.dataValues, "vikas", { expiresIn: "1h" });
            return res.send({result:signature})
        }
        else {
            return res.send(`not valid password`)
        }
    }
    else {
        return res.send(`please provide email as well as password.`)
    }
}