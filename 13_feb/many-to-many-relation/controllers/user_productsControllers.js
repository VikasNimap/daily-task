const db = require('../models/index');
const user_products = db.user_products;

exports.createUser_products = async(req,res)=>{
    const data = req.body;
    const response = await user_products.create(data);
    res.status(201).send({result:response});
}
exports.get = async(req,res)=>{
    const response = await user_products.findAll({
        include:[
            {
            model:db.products
            },
            {
            model:db.users,
            }
        ]
    });
    res.status(200).send({result:response});
}
exports.deleteUser_products = async(req,res)=>{
    const userId = req.params.id;
    const response = await user_products.destroy({where:{id:userId}});
    res.send({result:response});
}