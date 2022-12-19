'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.addColumn('teachers', 'login_id', Sequelize.STRING, {
    //     after: 'lname' // after option is only supported by MySQL
    //  });
    // await queryInterface.createTable('students', {
        // queryInterface.addConstraint('teachers', {
        //     fields: ['login_id'],
        //     type: 'unique',
        //     name: 'custom_unique_constraint_name'
        //   });
        await queryInterface.renameColumn('teachers', 'login_id', "assigned_to");
    
  },
  async down(queryInterface, Sequelize) {
    
  }
};