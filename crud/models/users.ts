'use strict';

import { Model, Optional } from 'sequelize';
// const {sequelize} = require("./index").sequelize;
// // import {'sequelize','Model','DataTypes'} from 'Sequelize'
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize: any, DataTypes: { STRING: any; }) => {
//   class users extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(_models: any) {
//       // define association here
//     }
//   }
//   users.init({
//     name: DataTypes.STRING,
//     email: DataTypes.STRING,
//     password: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'users',
//   });
//   return users;
// };


module.exports = (Sequelize: any, sequelize: any) => {
  class User extends Model {
  }
  User.init('users', {
    name: {
      type: sequelize.STRING,
      validate: {
        required: true,
      }
    },
    email: {
      type: sequelize.STRING,
      validate: {
        required: true,
        unique: true
      }
    },
    password: {
      type: sequelize.STRING,
      validate: {
        required: true
      }
    }
  }, {sequelize})
  sequelize.model = 'users'
}