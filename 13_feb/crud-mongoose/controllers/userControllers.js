const db = require('../models/userSchema');

exports.createUsers = async(req,res)=>{
    const data = req.body;
    const response = await db.create(data);
    res.status(201).send({result:response});
}
exports.getUsers = async(req,res)=>{
    const response = await db.find();
    res.send({result:response});
}
