'use strict';

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA; // use schema in production
}
// Sequelize automatically pluralizes the model name 'Session' to 'Sessions'
options.tableName = 'Sessions';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(options, [
      {
        session_date: new Date('2025-10-10T14:00:00Z'),
        notes: 'Initial project kickoff and requirements gathering.',
        client_id: 1, // Alice Johnson
        worker_id: 1, // Assumes a worker/user with id 1 exists
        payment_collected: true, // Assuming package was paid upfront
        duration: '2 hours',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        session_date: new Date('2025-09-01T09:00:00Z'),
        notes: 'One-time consultation call to review business plan.',
        client_id: 2, // Bob Smith
        worker_id: 2, // Assumes a worker/user with id 2 exists
        payment_collected: true,
        duration: '1 hour',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        session_date: new Date('2025-08-15T10:00:00Z'),
        notes: 'Phase 1 design review. Client requested major revisions.',
        client_id: 3, // Charlie Brown
        worker_id: 1,
        payment_collected: false, // Payment is overdue
        duration: '90 minutes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        session_date: new Date('2025-11-01T16:00:00Z'),
        notes: 'Basic package setup and client training.',
        client_id: 5, // Evan Wright
        worker_id: 1,
        payment_collected: false, // Pending invoice
        duration: '2.5 hours',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        session_date: new Date('2025-11-03T13:00:00Z'),
        notes: 'Hourly consultation. Reviewed project scope and provided estimates.',
        client_id: 6, // Fiona Glenanne
        worker_id: 2,
        payment_collected: false, // To be invoiced
        duration: '3 hours',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        session_date: new Date('2025-09-28T10:00:00Z'),
        notes: 'Full package onboarding session. Set up project milestones.',
        client_id: 8, // Hannah Abbott
        worker_id: 1,
        payment_collected: true, // Assuming partial payment covered this
        duration: '2 hours',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        session_date: new Date('2025-06-25T15:00:00Z'),
        notes: 'On-site appearance. Client disputed terms post-event.',
        client_id: 9, // Ian Malcolm
        worker_id: 2,
        payment_collected: false, // Disputed
        duration: '4 hours',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        session_date: new Date('2025-10-24T10:00:00Z'),
        notes: 'Follow-up session for standard package. Reviewed wireframes.',
        client_id: 1, // Alice Johnson
        worker_id: 1,
        payment_collected: true, // Covered by package
        duration: '1 hour',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        session_date: new Date('2025-04-09T11:00:00Z'),
        notes: 'Archived one-off service call. Resolved issue.',
        client_id: 7, // George Kirk
        worker_id: 1,
        payment_collected: true,
        duration: '1.5 hours',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        session_date: new Date('2025-11-04T11:00:00Z'),
        notes: 'Virtual session setup. Client needs to reschedule.',
        client_id: 10, // Jane Doe
        worker_id: 2,
        payment_collected: false,
        duration: '1 hour',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    // This will delete all entries from the Sessions table
    await queryInterface.bulkDelete(options, null, {});
  }
};
