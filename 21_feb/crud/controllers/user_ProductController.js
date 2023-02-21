const services = require('../services/user_productService');

exports.createUser_products = async (req, res) => {
    try {
        const data = req.body;
        const response = await services.createUser_productList(data);
        res.status(201).send({ result: response })
    } catch (error) {
        res.status(500).send(`${error}`)
    }
}

exports.getUser_products = async (req, res) => {
    try {
        const response = await services.getUser_productList();
        res.status(200).send({ result: response })
    } catch (error) {
        res.status(500).send(`${error}`)
    }
}