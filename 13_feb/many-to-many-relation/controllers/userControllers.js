const db = require('../models/index');
const users = db.users;

exports.createUsers  =async(req,res)=>{
    const data = req.body;
    const response = await users.create(data);
    res.status(201).send({result:response});
}
exports.getUsers = async(req,res)=>{
    const response = await users.findAll();
    res.status(200).send({result:response});
}
exports.updateUsers = async(req,res)=>{
    const userId = req.params.id;
    const data = req.body;
    const response = await users.update(data,{where:{id:userId}});
    res.status(200).send({result:response});
}