const db = require('../models/index');
const jwt = require('jsonwebtoken');

exports.createUser = async (req, res) => {
    const data = req.body;
    const response = await db.users.create(data);
    res.send(response)
}

exports.getUser = async (req, res) => {
    try {
        const response = await db.users.findAll();
        return res.send(response)
    } catch (error) {
        res.send({ result: `${error}` })
    }

}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email && password) {
            const response = await db.users.findOne({ where: { email: email } });
            console.log(response.dataValues);
            const pass = response.password;
            if (pass) {
                const signature = jwt.sign(response.dataValues, "vikas", { expiresIn: "1h" });
                return res.send({ result: signature, roleId: response.roleId })
            }
            else {
                return res.send(`not valid password`)
            }
        }
        else {
            return res.send(`please provide email as well as password.`)
        }
    } catch (error) {
        res.send({ result: `${error}` })
    }

}

exports.getUserById = async (req, res) => {
    const userId = req.params.id;
    const response = await db.users.findOne({where:{id:userId}});
    res.send({result:response})
}