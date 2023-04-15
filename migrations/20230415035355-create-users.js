'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        required:true
      },
      email: {
        type: Sequelize.STRING,
        required:true,
        unique:true
      },
      password: {
        type: Sequelize.STRING,
        required:true
      },
      roleId: {
        type: Sequelize.INTEGER,
        // required:true
      },
      contact: {
        type: Sequelize.STRING,
        required:true
      },
      deletedAt: {
        type: Sequelize.DATE
      },
      otp: {
        type: Sequelize.STRING
      },
      jobId: {
        type:Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },{prarnoid:true});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};