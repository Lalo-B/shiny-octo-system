'use strict';

const { options } = require('../../routes/api');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Clients';
    await queryInterface.bulkInsert(options, [
      {
        client_full_name: 'John Doe',
        client_codes: 'JD123',
        phone: '555-1234',
      },
    
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
