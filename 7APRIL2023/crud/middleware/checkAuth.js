const jwt = require('jsonwebtoken');
const db = require('../models/index');
const { Op } = require('sequelize')
exports.verify = async (req, res, next) => {
    try {
        const token = req.header("Authorization").split(" ")[1];
        if (!token) {
            return res.send({ result: `please enter token or login.` })
        }

        else {
            const decode = jwt.verify(token, "vikas");
            if (!decode) {
                return res.send({ result: `not a valid token.` })
            }
            else {
                req.userDetails = decode;
                // console.log("```````````````````",decode);
                next()
            }
        }


    } catch (error) {
        return res.send({ result: `${error}` })
    }
}



exports.permission = async (req, res, next) => {
    let data = {};

    try {
        const { id } = req.userDetails;
        const permitted = await db.roles_permission.findAll({ where: { roleId: id }, attributes: ['permissionId'] });


        if (permitted.length <= 0) {
            return res.send({ result: `no roleId found in permissions.` })
        }
        else {
            const count = permitted.map((perId) => perId.permissionId);

            if (!count) {
                return res.send({ result: `no permission found` })
            }
            else {
                const access = await db.permission.findAll({
                    where: {
                        id: { [Op.in]: count }
                    },
                    attributes: ['method', 'url', 'baseUrl']
                })
                if(!access){
                    return res.send("not valid route for valid user");
                }
                else{
                    data.systemInfo = access.map((e)=>e)
                    data.userInfo = 
                }
            }
        }
    } catch (error) {
        return res.send({ result: `${error}` })
    }

}