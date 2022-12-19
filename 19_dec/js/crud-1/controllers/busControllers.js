const db = require('../models/index');
const buses = db.bus;

exports.createBuses = async(req,res)=>{
    const data = req.body;
    const response = await buses.create(data);
    res.send({'message':'success',result:response});
}
exports.getBuses = async(req,res)=>{
    const response = await buses.findAll();
    res.send({'message':'success',result:response});
}
exports.updateBuses = async(req,res)=>{
    const userId = req.params.id;
    const data = req.body;
    const response = await buses.update(data,{where:{id:userId}});
    res.send({'message':'success',result:response});
}
exports.deleteBuses = async(req,res)=>{
    const userId = req.params.id;
    const response = await buses.destroy({where:{id:userId}});
    res.send({'message':'success',result:response});
}