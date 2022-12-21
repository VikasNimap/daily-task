'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await 
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('students', 'age', {
         // after option is only supported by MySQL
     });
  }
};