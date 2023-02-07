const db = require('../models/index');
const categories = db.categories;
// const products = db.products;
exports.createCategories = async (req, res) => {
    const data = req.body;
    const response = await categories.create(data);
    return res.send({ result: response });
}

exports.getCategories = async (req, res) => {
    const response = await categories.findAll({
        attributes:{
            exclude:['id']
        },
        include:{
            model: db.products,
            attributes:['pname','description']
        }
        }
    );
    return res.send({result:response});
}