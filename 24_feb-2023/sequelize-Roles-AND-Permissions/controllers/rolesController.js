const db = require('../models/index');
const roles = db.roles;

exports.createRoles = async(req,res)=>{
    try {
    const data = req.body;
    console.log(data);
    const response = await roles.create(data);
    res.send({result:response});
    } catch (error) {
        res.send({result:`${error}`});
    }
}

exports.deleteRoles = async(req,res)=>{
    try {
    const userId = req.params.id;
    const response = await roles.destroy({where:{id:userId}});
    res.send({result:response});
    } catch (error) {
        res.send({result:`${error}`});
    }
}