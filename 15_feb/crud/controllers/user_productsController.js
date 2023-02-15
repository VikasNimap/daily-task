const db = require('../models/index');
const user_products = db.user_products;

exports.createUser_products = async(req,res)=>{
    const data = req.body;
    const response = await user_products.create(data);
    res.status(201).send({data:response});
}
exports.getUser_products = async function(req,res){
    const response = await user_products.findAll();
    res.status(200).send({user_products:response});
}