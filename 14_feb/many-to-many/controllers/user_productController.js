// const db = require('../models/index');
// const user_products = db.user_products;
// const users = db.users

// exports.createUser_products = async (req, res) => {
//     const data = req.body;
//     const response = await user_products.create(data);
//     res.status(201).send({ user_product: response });
// }
// exports.getUser_products = async (req, res) => {
//     const response = await users.findAll({
//         // attributes: {
//         //     exclude: ["id","user_id","product_id","createdAt","updatedAt"]
//         // },
//         include: [
//             // {
//             //     model: db.users,
//             // },
//             {
//                 model: db.products,
//                 through: 'user_products'
//             }
//         ]
//     });
//     res.status(200).send({ user_products: response });
// }