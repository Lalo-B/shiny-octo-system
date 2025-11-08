'use strict';
const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA; // use schema in production
}
// Sequelize automatically pluralizes the model name 'Payment' to 'Payments'
options.tableName = 'Payments';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(options, [
      {
        // This payment corresponds to Owed_Amount ID 2 (Bob Smith)
        // which was already marked as 'paid' in its seeder.
        uuid: uuidv4(),
        order_number: 10001,
        payment_amount: 250.00,
        payment_number: 1,
        paid: true,
        payment_method: 'Stripe',
        client_id: 2, // Bob Smith
        notes: 'Payment for one-time consultation.',
        createdAt: new Date('2025-09-02T00:00:00Z'),
        updatedAt: new Date('2025-09-02T00:00:00Z')
      },
      {
        // This payment corresponds to Owed_Amount ID 10 (George Kirk)
        // which was also marked as 'paid'.
        uuid: uuidv4(),
        order_number: 10002,
        payment_amount: 300.00,
        payment_number: 1,
        paid: true,
        payment_method: 'Credit Card',
        client_id: 7, // George Kirk
        notes: 'Paid in full for one-off service.',
        createdAt: new Date('2025-04-11T00:00:00Z'),
        updatedAt: new Date('2025-04-11T00:00:00Z')
      },
      {
        // This is a partial payment for Owed_Amount ID 6 (Hannah Abbott)
        // which matches her client 'Partial Payment' status.
        uuid: uuidv4(),
        order_number: 10003,
        payment_amount: 1100.00,
        payment_number: 1,
        paid: true,
        payment_method: 'Bank Transfer',
        client_id: 8, // Hannah Abbott
        notes: 'First installment for Full Package.',
        createdAt: new Date('2025-10-05T00:00:00Z'),
        updatedAt: new Date('2025-10-05T00:00:00Z')
      },
      {
        // This is the second/final partial payment for Owed_Amount ID 6
        uuid: uuidv4(),
        order_number: 10004,
        payment_amount: 1100.00,
        payment_number: 2,
        paid: true,
        payment_method: 'Bank Transfer',
        client_id: 8, // Hannah Abbott
        notes: 'Second and final installment for Full Package.',
        createdAt: new Date('2025-11-05T00:00:00Z'),
        updatedAt: new Date('2025-11-05T00:00:00Z')
      },
      {
        // This payment pays off Owed_Amount ID 1 (Alice Johnson)
        uuid: uuidv4(),
        order_number: 10005,
        payment_amount: 1500.00,
        payment_number: 1,
        paid: true,
        payment_method: 'Stripe',
        client_id: 1, // Alice Johnson
        notes: 'Payment for e-commerce redesign project.',
        createdAt: new Date('2025-10-16T00:00:00Z'),
        updatedAt: new Date('2025-10-16T00:00:00Z')
      },
      {
        // This payment pays off Owed_Amount ID 5 (Fiona Glenanne)
        uuid: uuidv4(),
        order_number: 10006,
        payment_amount: 450.00,
        payment_number: 1,
        paid: true,
        payment_method: 'Credit Card',
        client_id: 6, // Fiona Glenanne
        notes: 'Payment for 3 hours consultation.',
        createdAt: new Date('2025-11-05T00:00:00Z'),
        updatedAt: new Date('2025-11-05T00:00:00Z')
      },
      {
        // This payment covers multiple invoices: Owed_Amounts 3 & 9 (Charlie Brown)
        uuid: uuidv4(),
        order_number: 10007,
        payment_amount: 5075.00, // 5000 + 75
        payment_number: 1,
        paid: true,
        payment_method: 'ACH Transfer',
        client_id: 3, // Charlie Brown
        notes: 'Full payment for custom software (Owed ID 3) and subscription fee (Owed ID 9).',
        createdAt: new Date('2025-11-05T00:00:00Z'),
        updatedAt: new Date('2025-11-05T00:00:00Z')
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    // This will delete all entries from the Payments table
    await queryInterface.bulkDelete(options, null, {});
  }
};
