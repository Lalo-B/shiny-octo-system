'use strict';
const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA; // use schema in production
}
// Sequelize automatically pluralizes the model name 'Teammate' to 'Teammates'
options.tableName = 'Teammates';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(options, [
      {
        // This teammate corresponds to worker_id: 1 in the demo-sessions seeder
        uuid: uuidv4(),
        name: 'Sarah Chen',
        hired: new Date('2023-01-15T00:00:00Z'),
        primary_focus: 'Project Management',
        email: 'sarah.chen@example.com',
        phone: 5551112222,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // This teammate corresponds to worker_id: 2 in the demo-sessions seeder
        uuid: uuidv4(),
        name: 'Michael Brown',
        hired: new Date('2023-06-01T00:00:00Z'),
        primary_focus: 'Client Relations',
        email: 'michael.brown@example.com',
        phone: 5553334444,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        uuid: uuidv4(),
        name: 'Alex Smith',
        hired: new Date('2024-02-20T00:00:00Z'),
        primary_focus: 'Billing & Invoicing',
        email: 'alex.smith@example.com',
        phone: 5558889999,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    // This will delete all entries from the Teammates table
    await queryInterface.bulkDelete(options, null, {});
  }
};
