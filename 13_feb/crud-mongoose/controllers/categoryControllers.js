const category = require('../models/categorySchema');

exports.createCategory = async (req, res) => {
    const data = req.body;
    const response = await category.create(data);
    res.status(201).send({ result: response });
}
exports.getCategory = async (req, res) => {
    const response = await category.find();
    res.status(200).send({ result: response });
}
exports.updateCategory = async (req, res) => {
    const userId = req.params.id;
    const data = req.body;
    const response = await category.findByIdAndUpdate({ _id: userId }, { $set: data });
    res.status(200).send({ result: response });
}
exports.deleteCategory = async(req,res)=>{
    const userId = req.params.id;
    const response = await category.findByIdAndDelete({_id:userId});
}