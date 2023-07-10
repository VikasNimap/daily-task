const userService = require('../services/userLogin');


exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const response = await userService.createLogin(email, password);
        if (!response.error) {
            return res.status(200).send({ result: response });
        } else {
            return res.status(400).send({ result: response });
        }
    }
    catch (error) {
        return res.status(500).send({ result: error });
    }
}

exports.forgetPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const response = await userService.forgotPassword(email);
        if (!response.error) {
            return res.status(200).send({ result: response });
        } else {
            return res.status(400).send({ result: response });
        }
    } catch (error) {
        return res.status(500).send({ result: error });
    }

}