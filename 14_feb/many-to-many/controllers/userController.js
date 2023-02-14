const db = require('../models/index');
const users = db.users;

exports.createUsers = async (req, res) => {
    const data = req.body;
    const response = await users.create(data);
    res.status(201).send({ result: response });
}
exports.getUsers = async (req, res) => {
    const response = await users.findAll({
        attributes: {
            exclude: []
        },
        include: {
            model: db.products,
            through: "user_products"
        }

    });
    res.status(200).send({ result: response });
}