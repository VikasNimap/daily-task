// // 'use strict';

// // // const { Sequelize, DataTypes, Model } = require('sequelize');
// // // import { Model, Optional } from 'sequelize';
// // import { Sequelize, DataTypes, Model } from 'sequelize';
// // class User extends Model { }
// // // const {sequelize} = require("./index").sequelize;
// // // // import {'sequelize','Model','DataTypes'} from 'Sequelize'
// // // const {
// // //   Model
// // // } = require('sequelize');
// // // module.exports = (sequelize: any, DataTypes: { STRING: any; }) => {
// // //   class users extends Model {
// // //     /**
// // //      * Helper method for defining associations.
// // //      * This method is not a part of Sequelize lifecycle.
// // //      * The `models/index` file will call this method automatically.
// // //      */
// // //     static associate(_models: any) {
// // //       // define association here
// // //     }
// // //   }
// // //   users.init({
// // //     name: DataTypes.STRING,
// // //     email: DataTypes.STRING,
// // //     password: DataTypes.STRING
// // //   }, {
// // //     sequelize,
// // //     modelName: 'users',
// // //   });
// // //   return users;
// // // };

// // // module.exports = (Sequelize: any, sequelize: any) => {

// // User.init({
// //   name: {
// //     type: DataTypes.STRING,
// //     allowNull: false,
// //   },
// //   email: {
// //     type: DataTypes.STRING,
// //     allowNull: false,
// //     unique: true
// //   },
// //   password: {
// //     type: DataTypes.STRING,
// //     allowNull: false
// //   }
// // }, {
// //   modelName: 'User',
// //   sequelize: new Sequelize()
// // });
// // // return 'User'

// import { Table, Column, Model, DataType } from 'sequelize-typescript';

// @Table
// export class User extends Model<User> {
//   @Column({
//     type: DataType.STRING,
//     allowNull: false,
//   })
//   name!: string;

//   @Column({
//     type: DataType.STRING,
//     allowNull: false,
//   })
//   email!: string;
// }

import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/config';

interface UserAttributes {
  id: number;
  name: string;
  email: string;
  password: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> { }

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;

  // Other class methods or associations can be defined here

  // Add a "tableName" property to specify the table name explicitly
  public static readonly tableName = 'users';
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'User', // Choose any suitable model name
    timestamps: false, // Set to true if you want to use timestamps
  }
);

export default User;
