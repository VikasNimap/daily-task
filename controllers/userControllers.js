const services = require('../services/userServices')
exports.createUser = async (req, res) => {
    const data = req.body;
    const response = await services.createUser(data)
    res.send(response)
}
//pagination
exports.getUsers = async (req, res) => {
    const { limit, offset } = req.query;
    console.log(limit, offset);
    const response = await services.getUsers(limit, offset);
    res.send(response)
}

exports.updateUser = async (req, res) => {
    const userId = req.params.id;
    const data = req.body;
    const response = await services.updateUser(userId, data);
    res.send(response)
}

exports.deleteUser = async (req, res) => {
    const userId = req.params.id;
    console.log(userId);
    const response = await services.deleteUser(userId);
    res.sendStatus(200).send('ok');
}