"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const user_1 = require("./user");
const db = (0, user_1.getClient)();
// const sequelize = new Sequelize('user',);
function user() {
    const User = sequelize.define('user', {
        name: {
            type: sequelize.DataTypes.STRING,
            allowNull: false
        }
    });
    return User;
}
exports.user = user;
