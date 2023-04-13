const {Sequelize} = require('sequelize');

const sequelize = new Sequelize("flipkart","postgres","#Vikas8692",{
    host:'localhost',dialect:'postgres'});

const User = sequelize.define("User",{
    firstName: {
        type: Sequelize.STRING,
    },
    lastName: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
},{timestamps:true})

module.exports=User
