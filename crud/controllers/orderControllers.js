const db = require('../models/index');
const orders = db.orders;

exports.createOrders = async(req,res)=>{
    const data = req.body;
    const response = await orders.create(data);
    res.send({'message':'success',result:response});
}
exports.getOrders = async(req,res)=>{
    const response = await orders.findAll({
        attributes: {           
            // exclude: ['user_id']
        },
        include:{
            model:db.users,
            attributes:["fname","lname",]
        }
    });
    res.send({'message':'success',result:response});
}
exports.updateOrders = async(req,res)=>{
    const userId = req.params.id;
    const data = req.body;
    const response = await orders.update(data,{where:{id:userId}});
    res.send({'message':'success',result:response});
}
exports.deleteOrders = async(req,res)=>{
    const userId = req.params.id;
    const response = await orders.destroy({where:{id:userId}});
    res.send({'message':'success',result:response});
}