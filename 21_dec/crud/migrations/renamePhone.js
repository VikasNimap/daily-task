'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
   await queryInterface.renameColumn('students', 'phone',"contact", {
        // after option is only supported by MySQL
    });
    // await 
  },
  async down(queryInterface, Sequelize) {
    // await 
  }
};