const db = require('../models/index');
const users = db.users;
const bcrypt = require('bcrypt');

exports.createNewUser = async (data) => {
    const salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(data.password, salt)
    const response = await users.create(data);
    return ({ data: response })
}

exports.getAllUserData = async (page) => {
    const response = await users.findAll({
        include: {
            model: db.products,
            through: 'user_products'
        }
    });
    return ({ data: response })
}

exports.updateUserData = async (userId, data) => {
    const salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(data.password, salt);
    const response = await users.update(data, { where: { id: userId } });
    return ({ data: response })
}

exports.deleteUserData = async (userId) => {
    const response = await users.destroy(userId);
    return ({ data: response })
}
