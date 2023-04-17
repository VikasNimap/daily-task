const services = require('../services/userServices')
exports.createUser = async(req,res)=>{
    const data = req.body;
    const response = await services.createUser(data)
    res.send(response)
}
//pagination
exports.getUsers = async (req,res) => {
    const {limit,offset} = req.query;
    console.log(limit,offset);
    const response = await services.getUsers(limit,offset);
    res.send(response)
}

