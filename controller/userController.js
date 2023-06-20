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