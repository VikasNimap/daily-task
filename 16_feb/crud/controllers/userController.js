const db = require('../models/index');
const users = db.users;

exports.createUsers = async(req,res)=>{
    const data = req.body;
    const response = await users.create(data);
    res.send({result:response});
}
exports.getUsers = async function(req,res){
    const response = await users.findAll();
    res.send({result:response});
}
exports.updateUsers = async function(req,res){
    const userId = req.params.id;
    const data = req.body;
    const response = await users.update(data,{where:{id:userId}});
    res.send({result:response});
}
exports.deleteUsers = async function(req,res){
    const userId = req.params.id;
    const response = await users.destroy({where:{id:userId}})
    res.send({result:response})
}