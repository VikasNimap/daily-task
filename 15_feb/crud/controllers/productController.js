const db = require('../models/index');
const products = db.products;

exports.createProducts = async(req,res)=>{
    const data = req.body;
    const response = await products.create(data);
    res.status(201).send({product:response});
}
exports.getProducts = async(req,res)=>{
    const response = await products.findAll();
    res.status(200).send({products:response});
}