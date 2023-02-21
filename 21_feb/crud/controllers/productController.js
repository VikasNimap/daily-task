const services = require('../services/productService');

exports.createProducts = async(req,res)=>{
    try {
        const data = req.body;
        const response = await services.createProductList(data);
        res.status(201).send({result:response});
    } catch (error) {
        res.status(500).send(`${error}`)
    }
   
}

exports.getProducts = async(req,res)=>{
    try {
        const response = await services.getProductList();
        res.status(201).send({result:response});
    } catch (error) {
        res.status(500).send(`${error}`)
    }
   
}

exports.updateProducts = async(req,res)=>{
    try {
        const userId = req.params.id;
        const data = req.body;
        const response = await services.updateProductList(userId,data);
        res.status(200).send({result:response});
    } catch (error) {
        res.status(500).send(`${error}`)
    }
}

exports.deleteProducts = async(req,res)=>{
    try {
        const userId = req.params.id;
        const response = await services.deleteProductList(userId);
        res.status(200).send({result:response})
    } catch (error) {
        res.status(500).send(`${error}`)
    }
}