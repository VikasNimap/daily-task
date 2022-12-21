'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.addColumn('students', 'age', Sequelize.INTEGER, {
       await queryInterface.addColumn('students', 'password', Sequelize.STRING, {
            after: 'class' // after option is only supported by MySQL
         });
    //     after: 'phone' // after option is only supported by MySQL
    //  });
  },
  async down(queryInterface, Sequelize) {
  }
};