'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class capitals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      capitals.belongsTo(models.states,{
        foreignKey:'states_id'
      })
      // define association here
    }
  }
  capitals.init({
    capital: DataTypes.STRING,
    states_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'capitals',
  });
  return capitals;
};