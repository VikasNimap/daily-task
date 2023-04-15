const db = require('../models/index');
const users = db.users;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {Op} = require('sequelize');


//creating a new user data.
exports.createUser = async(data)=>{
    const salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(data.password,salt);
    const response = await users.create(data);
    if(response){
        return ({result:response})
    }
    else{
        return ({message:`data cannot be added.`})
    }
}

//get all users list
exports.findAllUsers = async() => {
    const response = await users.findAll();
    if(response){
        return ({result:response})
    }
    else{
        return ({message:`cannot find users`})
    }
}

//getting user by id.
exports.getUserById = async (id) => {
    const response = await users.findOne({
        where: {
          [Op.and]: [
            { id: id },
            { deletedAt: null }
          ]
        }
      })
      if(response){
        return ({result:response})
      }
      else{
        return ({message:`unable to find details with given userId.`})
      }
}

//updating user data 
exports.updateOneUser = async (userId, data) => {
    const response = await users.update(data,{where:{id:userId}});
    if(response) {
        return ({result:response})
    }
    else{
        return ({message:`unable to upload user details please try again.`})
    }
}

//restoring user 
exports.restoreUserData = async (userId) => {
    const response = await users.restore({where:{id:userId}});
    if(response) {
        return ({result:response})
    }
    else{
        return ({message:`cannot restore user.`})
    }
}

//deleteing user data 
exports.deleteUserData = async (userId) => {
    const response = await users.destroy({where:{id:userId}});
    if(response) {
        return ({result:response})
    }
    else{
        return ({message: `unable to delete record from database.`})
    }
}

//user login 
exports.userLogin = async(email,password) => {
    if(email && password)
    {
        const find = await users.findOne({where:{email:email}});
        if(find){
            const decode = await bcrypt.compare(password,find.password);
            if(decode){
                const data = {
                    userId:find.id,
                    email: find.email,
                    roleId: find.roleId
                }
                const signature = jwt.sign(data,"qwertyuiopasdfghjklzxcvbnm",{expiresIn:"24h"})
                const user = {
                    userId:find.id,
                    token:signature
                }
                const add = await db.userToken.create(user);
                return ({result:signature})
            }
            else{
                return ({message:`password do not match`})
            }
        }
        else{
            return ({message:`email doesn't exist in our records`})
        }
    }
    else{
        return ({message:`please enter valid email & password`})
    }
}

//forget password
exports.forgetPassword  = async(email) => {
    const response = await users.findOne({where:{email:email}});
    if(response){
        const generateOtp = "1234";
        const res = await users.update({otp:generateOtp},{where:{email:email}});
        return ({result:generateOtp,userId:response["id"]})
    }
    else{
        return ({message:`user not exists.`})
    }
}

//verify otp 
exports.verifyOtp = async(id,otp) => {
    const response = await users.findOne({where:{[Op.and]:[{id:id},{otp:otp}]}});
    if(response){
        let condition = true;
        return ({result:condition,msg:`otp verified.`})
    }
    else{
        return ({message:`otp not matched please enter valid otp.`})
    }
}

exports.resetUserPasswd = async (userId,password,confirmPassword) => {
    if(password===confirmPassword){
        const response = await users.update({password:password},{where:{id:userId}});
        if(response){
            return ({result:response})
        }
        else{
            return ({message:`cannot update password`})
        }
    }
    else{
        return ({message:`password and newPassword do not match.`})
    }
}

