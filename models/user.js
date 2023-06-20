const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

module.exports = (sequelize, DataTypes) => {
    class user extends Model { }

    user.init({
        // Model attributes are defined here
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
            // allowNull defaults to true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
            // allowNull defaults to true
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
            // allowNull defaults to true
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
            // allowNull defaults to true
        }
    }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'user' // We need to choose the model name
    });
    return user
}

// the defined model is the class itself
