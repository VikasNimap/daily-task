const db = require('../models/index');
const bcrypt = require('bcrypt');
exports.createNewUser = async (data) => {
    const password = data.email.charAt(0).toUpperCase()
    let pass = data.email.substr(1, 4);
    let password1 = Math.floor((1000 + Math.random() * 9000))
    data.password = (password + pass + password1 + "@nimap");
    data.originalPassword = data.password
    const salt = await bcrypt.genSalt(12);
    data.password = await bcrypt.hash(data.password, salt);
    const response = await db.user.create(data);
    if (!response) {
        return { error: true, message: `Data not created`, data: response }
    } else {
        return { error: null, message: `Data created`, data: response }
    }
}


exports.getUsers = async () => {
    const response = await db.user.findAll({ attributes: ['firstName', 'email', 'phone'] });
    if (!response.length > 0) {
        return { error: true, message: `Data not found`, data: response }
    } else {
        return { error: null, message: `Data found`, data: response }
    }
}

exports.updateUser = async (userID, data) => {
    const response = await db.user.update(data, { where: { id: userID } });
    if (!response) {
        return { error: true, message: `Data not created`, data: response }
    } else {
        return { error: null, message: `Data created`, data: response }
    }
}