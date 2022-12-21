'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.addColumn('students', 'age', Sequelize.INTEGER, {
    //     after: 'phone' // after option is only supported by MySQL
    //  });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('students');
  }
};