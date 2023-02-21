const services = require('../services/userService')

exports.createUsers = async(req,res)=>{
    try {
        const data = req.body;
        const response = await services.createNewUser(data);
        return res.status(201).send({data:response})
    } catch (error) {
        res.status(500).send(`${error}`)
    }
}

exports.getAllUsers = async(req,res)=>{
    try {
        const page = req.params.page;
        const response = await services.getAllUserData(page);
        return res.status(200).send({data:response})
    } catch (error) {
        res.status(500).send(`${error}`)
    }
}

exports.updateUsers = async(req,res)=>{
    try {
        const userId = req.params.id;
        const data = req.body;
        const response = await services.updateUserData(userId,data);
        res.status(200).send({data:response});
    } catch (error) {
        res.status(500).send(`${error}`)
    }
}

exports.deleteUsers = async(req,res)=>{
    try {
        const userId = req.params.id;
        const response = await services.deleteUserData(userId);
        res.status(200).send({data:response});
    } catch (error) {
        res.status(500).send(`${error}`)
    }
}