const products = require('../models/productSchema');

exports.createProducts = async (req, res) => {
    const data = req.body;
    const response = await products.create(data);
    res.status(201).send({ result: response });
}
exports.getProducts = async (req, res) => {
    // const pipeline = ()
    const response = await products.aggregate([{
        $lookup:{
            from: "categories",
            localField: "category_id",
            foreignField: "_id",
            as: "product_category"
        }
    }]);
    // const response = await products.find().populate("category");
    res.status(200).send({ result: response });
}
exports.updateProducts = async (req, res) => {
    const userId = req.params.id;
    const data = req.body;
    const response = await products.findByIdAndUpdate({ _id: userId }, { $set: data });
    res.status(200).send({ result: response });
}
exports.deleteProducts = async (req, res) => {
    const userId = req.params.id;
    const response = await products.findOneAndDelete({ _id: userId });
    res.status(200).send({ result: response });
}