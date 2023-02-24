const db = require('../models/index');
const users = db.users;
const user_roles = db.user_roles;
const bcrypt = require('bcrypt');
const { use } = require('../routes');
const jwt = require('jsonwebtoken');
const Op = require('sequelize');

exports.createUsers = async (req, res) => {
    try {
        const data = req.body;
        const salt = await bcrypt.genSalt(10);
        data.password = await bcrypt.hash(data.password, salt);
        const response = await users.create(data);
        res.send({ result: response });
    } catch (error) {
        res.send(`${error}`)
    }
}

exports.getUsers = async (req, res) => {
    try {
        const response = await users.findAll(
            {
                attributes:
                {
                    exclude: []
                },
                include:
                {
                    model: db.roles,
                    through: 'user_roles'
                },
                where: { isActive: true },
            }
        );
        return res.send({ result: response });
    } catch (error) {
        res.send(`${error}`)
    }
}

exports.updateUsers = async (req, res) => {
    try {
        const userId = req.params.id;
        const data = req.body;
        const response = await users.update(data, { where: { id: userId } });
        res.send({ result: response })
    } catch (error) {
        res.send({ result: error })
    }
}

exports.deleteUsers = async (req, res) => {
    try {
        const userId = req.params.id;
        const isActive = false;
        const response = await users.update({ isActive: isActive }, { where: { id: userId } });
        res.send({ result: response });
    } catch (error) {
        res.send({ result: `${error}` })
    }
}

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!(email || password)) { return res.send({ result: `please enter valid email and password.` }) }
        const findUser = await users.findOne({ where: { email: email } });
        if (!findUser) { return res.send({ result: `no user found` }) }
        if (findUser.isActive != true) { return res.send({ result: `Invalid User.` }) }
        const pass = await bcrypt.compare(password, findUser.password);
        if (!pass) { return res.send({ result: `password do not match please try again.` }) }
        const role = await user_roles.findOne({ where: { userId: findUser.id } });
        const token = jwt.sign({ findUser: findUser, user_roles: role }, "vikas", { expiresIn: "1h" });
        res.send({ result: token })
    } catch (error) {
        res.send({ result: `${error}` })
    }
}