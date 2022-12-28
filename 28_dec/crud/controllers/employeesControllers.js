const db = require('../models/index');
const employees = db.employees;
const jwt = require('jsonwebtoken');
const { Sequelize, Op } = require("sequelize");
const bcrypt = require('bcrypt');
//Creating data using bcrypt as salt.
exports.create = async (req, res) => {
    const data = req.body;
    const salt = await bcrypt.genSalt(10)
    data.password = await bcrypt.hash(data.password, salt)
    const response = await employees.create(data);
    res.send({ result: response })
}
exports.get = async (req, res) => {
    const response = await employees.findAll();
    res.send({ result: response })
}
exports.update = async (req, res) => {
    const userId = req.params.id;
    const data = req.body;
    const response = await employees.update(data, { where: { id: userId } });
    res.send({ result: response })
}
exports.delete = async (req, res) => {
    const userId = req.params.id;
    const response = await employees.destroy({ where: { id: userId } });
    res.send({ result: response });
}


exports.login = async (req, res) => {
    const { email, password } = req.body;

    const response = await employees.findOne({ where: {email:email }})
    // console.log(response);
    const result =await bcrypt.compare(password, response.password)
    // console.log(result);
    if (result) {
        const token = jwt.sign(response.email, "Vikash");
        res.send(token)
    }
    else {
        res.send('error')
    }

    // If password matches then display true
    // console.log(isMatch);
    ;
}
exports.getYourData = async (req, res) => {
    const userId = req.params.id;
    const response = await employees.findOne({ where: { id: userId } });
    res.send({ result: response });
}