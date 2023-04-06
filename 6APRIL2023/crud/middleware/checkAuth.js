const jwt = require('jsonwebtoken');

exports.verify = async (req, res, next) => {
    const token = req.header("Authorization").split(" ")[1];
    const decode = jwt.verify(token, "vikas");

    req.userDetails = decode;
    console.log(req.userDetails);
}