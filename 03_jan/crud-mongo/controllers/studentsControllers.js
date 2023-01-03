const models = require('../models/studentsModels');
const mongoose = require('mongoose')
// const jwt = require('jsonwebtoken');
exports.createStudents = async (req, res) => {
    const response = await models.create(req.body);
    return res.send(/* for specific response to client*/{ name: response.name, email: response.email });
    // next()
}


exports.getStudents = async (req, res) => {
        const response = await models.find();
       return  res.send({ result: response });
        // next()
}
exports.updateStudents = async (req, res) => {
    try {
        const userId = req.params.id;
        const data = req.body;
        const response = await models.findOneAndUpdate({ _id: userId }, data, { new: true });
       return  res.send({ result: response });
        // next()
    }
    catch (err) {
        return console.log(err);
    }
}
exports.deleteStudents = async (req, res,next) => {
    try {
        const userId = req.params.id;
        const response = await models.deleteOne({ _id: userId })
       return  res.send({ result: response })
        next()
    }
    catch (err) {
        return console.log(err);
    }
}