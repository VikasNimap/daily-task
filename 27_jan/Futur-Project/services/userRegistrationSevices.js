const model = require('../models/registerUser');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

exports.createUser = async (data) => {
    const salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(data.password, salt);
    const createData = await model.create(data);
    return createData
}

exports.getuserData = async (otp) => {
    const getUsers = await model.findOne({OTP:otp});
    if(!getUsers){
        return (`verification failed.`)
    }
    return getUsers
}
exports.update = async (userId, data) => {
    const updating = await model.findByIdAndUpdate({ _id: userId }, data);
    return updating
}
exports.delete = async (userId) => {
    const deleting = await model.findByIdAndDelete({ _id: userId });
    return deleting
}
exports.login = async (phone) => {
    const findPhone = await model.findOne({ phone: phone })
    if (!findPhone) {
        return ({ msg: `no data found.` });
    }
    else {
        const digits = "0123456789";
        let generateOTP = "";
            generateOTP += Math.floor(100000 + Math.random() * 900000);
        const storeOTP = await model.findByIdAndUpdate({_id:findPhone["_id"]},{OTP:generateOTP});
        return generateOTP
    }
}