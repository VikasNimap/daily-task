'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await 
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('students', 'createdAt', {
         // after option is only supported by MySQL
     });
    await queryInterface.removeColumn('students', 'updatedAt', {
         // after option is only supported by MySQL
     });
  }
};