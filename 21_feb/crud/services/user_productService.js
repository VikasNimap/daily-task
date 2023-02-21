const db = require('../models/index');
const user_products = db.user_products;

exports.createUser_productList = async (data) => {
    const response = await user_products.create(data);
    return ({ result: response })
}

exports.getUser_productList = async () => {
    const response = await user_products.findAll();
    return ({ result: response })
}