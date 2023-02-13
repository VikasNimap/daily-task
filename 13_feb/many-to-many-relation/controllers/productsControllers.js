const db = require('../models/index');
const products = db.products;

exports.createProducts = async (req, res) => {
    const data = req.body;
    const response = await products.create(data);
    res.status(201).send({ result: response });
}
exports.getProducts = async (req, res) => {
    const page = req.params.page;
    const response = await products.findAll({ limit: 2, offset: page - 1 });
    res.status(200).send({ result: response });
}
exports.deleteProducts = async (req, res) => {
    const userId = req.params.id;
    const response = await products.destroy({ where: { id: userId } });
    res.send({ result: response })
}
exports.getAllProducts = async (req, res) => {
    const response = await products.findAll({
        attributes: {
            exclude: ["createdAt", "updatedAt", "id"]
        },
        include: [
            {
                model: db.users,
                attributes: ["name", "email"]
            }
        ]
    })
    res.send(response)
}