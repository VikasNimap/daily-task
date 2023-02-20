const db = require('../models/index');
const users = db.users;
const path = require('path');

exports.createUsers = async (req, res) => {
    try {
        const data = req.body;
        const file = req.file.path;
        console.log(file);
        data.profile_pic = `http://localhost:3000${__dirname}` + file;
        const response = await users.create(data);
        res.status(201).send({ result: response });
    } catch (error) {
        res.status(500).send({ result: `${error}` })
    }
}