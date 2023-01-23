const db = require('../models/index');
const users = db.users;

exports.createUsers = async(req,res)=>{
    const data = req.body;
    const response = await users.create(data);
    res.send(response)
}
exports.getUsers = async(req,res)=>{
    const response = await users.findAll();
    res.send(response);
}