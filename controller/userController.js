const userService = require('../services/userServices');

exports.createUser = async (req, res) => {
    try {
        const data = req.body;
        const response = await userService.createNewUser(data);
        if (!response) {
            return res.status(400).send(response)
        } else {
            return res.status(201).send(response)
        }
    } catch (error) {
        return res.status(500).send({ error })
    }

}

exports.getUser = async (req, res) => {
    try {
        const response = await userService.getUsers();
        if (response.error) {
            return res.status(404).send(response)
        } else {
            return res.status(200).send(response)
        }
    } catch (error) {
        return res.status(500).send({ error })
    }
}

exports.updateUser = async (req, res) => {
    try {
        const { userId } = req.query;
        const data = req.body;
        const response = await userService.updateUser(userId, data);
        if (!response) {
            return res.status(400).send(response)
        } else {
            return res.status(201).send(response)
        }
    } catch (error) {
        return res.status(500).send({ error })
    }

}