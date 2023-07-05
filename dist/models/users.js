"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
// import { client } from './user';
// const sequelize = new Sequelize('user',);
// export function user() {
// const User = sequelize.define('user', {        
//     name: {
//         type: sequelize.DataTypes.STRING,
//         allowNull: false
//     }
// })
// return User
// getClient
// }
// export function userModel(sequelize: any, DataTypes: any) {
// const User = sequelize.define('user', {
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         defaultValue: 'vikas@gmail.com'
//     }
// })
// }
// export async function db() {
class User extends sequelize_1.Model {
}
exports.User = User;
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    modelName: 'User',
    sequelize: new sequelize_1.Sequelize
});
// }
