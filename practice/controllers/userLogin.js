const userService = require('../services/userLogin');


exports.login = async (req, res) => {
    const { email, password } = req.body;
    const response = await userService.createLogin(email, password);
    if (!response.error) {
        return res.status(200).send({ result: response });
    } else {
        return res.status(400).send({ result: response });
    }
}