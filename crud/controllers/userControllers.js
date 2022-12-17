const db = require('../models/index');
const {Op}=require("sequelize")
const users = db.users;

exports.createUsers = async(req,res)=>{
    const data = req.body;
    console.log(data);
    const response = await users.create(data);
    res.send({'message':'success',result:response});
}
exports.getUsers = async(req,res)=>{
    const response = await users.findAll({
        attributes: {exclude: ['password','createdAt','updatedAt']},
        include:{
            model:db.orders,
            attributes:["pname","amount"]
        }
    });
    res.send({'message':'success',result:response});
}
exports.updateUsers = async(req,res)=>{
    const userId  = req.params.id;
    const data = req.body;
    const response = await users.update(data,{where:{id:userId}});
    res.send({'message':'success',result:response});
}
exports.deleteUsers = async(req,res)=>{
    const userId = req.params.id;
    const response = await users.destroy({where:{id:userId}});
    res.send({'message':'success',result:response});
}