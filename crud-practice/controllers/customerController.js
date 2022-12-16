const db = require('../models/index');
const customers = db.customers;

exports.createCustomers = async (req, res) => {
    const data = req.body;
    const response = await customers.create(data);
    res.send({ 'message': 'success', result: response });
}
exports.getCustomers = async (req, res) => {
    const response = await customers.findAll();
    res.send({ 'message': 'success', result: response });
}
exports.updateCustomers = async (req, res) => {
    const userId = req.params.id;
    const data = req.body;
    const response = await customers.update(data, { where: { id: userId } });
    res.send({ 'message': 'success', result: response });
}
exports.deleteData = async (req, res) => {
    const userId = req.params.id;
    const response = await customers.destroy({where:{id:userId}});
    res.send({'message':'success',result:response})
}