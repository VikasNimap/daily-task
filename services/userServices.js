const db = require('../models/index');

exports.createNewUser = async (data) => {
    const response = await db.user.create(data);
    if (!response) {
        return { error: true, message: `Data not created`, data: response }
    } else {
        return { error: null, message: `Data created`, data: response }
    }
}