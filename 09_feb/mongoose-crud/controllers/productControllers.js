const db = require('../models/productSchema');

exports.createProducts = async(req,res)=>{
    const data = req.body;
    const response = await db.create(data);
    res.send({result:response});
}
exports.getProducts = async(req,res)=>{
    const response = await db.find()//.populate("users");
    res.send({result:response});
}