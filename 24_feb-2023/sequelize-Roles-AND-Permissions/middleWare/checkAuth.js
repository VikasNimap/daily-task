const jwt = require('jsonwebtoken');

exports.checkAuth = async (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) { return res.send({ result: `no token found please login.` }) }
    const split = token.split(" ")[1]
    const decodeToken = jwt.verify(split, "vikas");
    console.log(decodeToken.user_roles.roleId);
    if ((Number(decodeToken.user_roles.roleId) !== 1 && Number(decodeToken.user_roles.roleId) !== 3)) {
        return res.send({ result: `access not allowed.` })
    }
    next()
}