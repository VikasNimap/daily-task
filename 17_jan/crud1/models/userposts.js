'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userPosts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.posts.belongsToMany(models.users,{through:'userPosts',foreignKey:'users_id'})
      models.users.belongsToMany(models.posts,{through:'userPosts',foreignKey:'users_id'})
      // define association here
    }
  }
  userPosts.init({
    users_id: DataTypes.INTEGER,
    posts_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'userPosts',
    paranoid:true
  });
  return userPosts;
};