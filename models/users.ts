import sequelize, { Sequelize, DataTypes, Model } from "sequelize";
import { Client } from "pg";
import { client } from './user';
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
export class User extends Model {
    public id!: number;
    public username!: string;
    public email!: string;
    public password!: string;
}
User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    modelName: 'User',
    sequelize: new Sequelize
})
// }
