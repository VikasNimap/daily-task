const db = require('../models/index');
const products = db.products;

exports.createProducts = async (req, res) => {
    const data = req.body;
    const response = await products.create(data);
    return res.send({ result: response });
}
exports.getProducts = async (req, res) => {
    const response = await products.findAll();
    return res.send({ result: response })
}
exports.updateProducts = async (req, res) => {
    const userId = req.params.id;
    const data = req.body;
    const response = await products.update(data,{where:{id:userId}});
    // return console.log(response);
    return res.send({result:response});
}
exports.deleteProducts = async(req,res)=>{
    const userId = req.params.id;
    const response = await products.destroy({where:{id:userId}});
    return res.send({result:response});
}