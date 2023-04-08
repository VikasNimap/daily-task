const jwt = require('jsonwebtoken');
const db = require('../models/index');
const { Op } = require('sequelize')

//token verification
exports.verify = async (req, res, next) => {
    try {
        const bearerToken = req.header("Authorization");
        // console.log("bearer======", bearerToken);
        if (!bearerToken) {
            return res.send({ result: `please enter token or login.` })
        }

        else {
            const token = bearerToken.split(" ")[1];
            const decode = jwt.verify(token, "vikas");
            if (!decode) {
                return res.send({ result: `not a valid token.` })
            }
            else {
                req.userDetails = decode;
                console.log("```````````````````", decode);
                next()
            }
        }


    } catch (error) {
        return res.send({ result: `${error}` })
    }
}


//permission check
exports.permission = async (req, res, next) => {
    
    try {
        // console.log(req.method,req.url,req.path,"=============");
        const { id } = req.userDetails;
        const permitted = await db.roles_permission.findAll({ where: { roleId: id }, attributes: ['permissionId'] });


        if (permitted.length <= 0) {
            return res.send({ result: `no roleId found in permissions.` })
        }
        else {
            const count = permitted.map((perId) => perId.permissionId);
            console.log("===",count);

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
                if (!access) {
                    return res.send("not valid route for valid user");
                }
                else {
                    let match = false;
                    access.map((e) => {
                        console.log("e logged --------", req.route.path,e.dataValues.url);
                        if (e.dataValues.method == req.method && e.dataValues.url == req.route.path && e.dataValues.baseUrl == req.baseUrl) {
                            match = true
                        }
                    })
                    if (match) {
                        next()
                    }
                    else {
                        res.status(403).json({ message: 'You dont have permission for this!' })
                    }

                    // data.userInfo = 
                }
            }
        }

    } catch (error) {
        return res.send({ result: `${error}` })
    }

}

