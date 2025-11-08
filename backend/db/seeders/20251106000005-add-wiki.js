'use strict';

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA; // use schema in production
}
// Sequelize automatically pluralizes the model name 'Wiki' to 'Wikis'
options.tableName = 'Wikis';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(options, [
      {
        text: 'Clients can pay their invoices via the secure link sent to their email. We accept all major credit cards via Stripe, as well as ACH bank transfers. For wire transfer instructions, please contact billing@example.com.',
        intended_for: 'Client',
        tags: 'billing, payment, invoice, client, how-to',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: '1. Send the official welcome packet. 2. Schedule the initial 30-minute consultation call via Calendly. 3. Create the client profile in the dashboard and link their project. 4. Assign a primary teammate (worker_id) to the client.',
        intended_for: 'Teammate',
        tags: 'onboarding, new client, process, teammate, checklist',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: 'To book a new session, please use your dedicated booking link provided in your welcome packet. If you cannot locate your link, please contact your primary representative. Please note our 48-hour cancellation policy.',
        intended_for: 'Client',
        tags: 'booking, session, calendly, client',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: 'When a client makes a partial payment, log it in the Payments table. Ensure the new payment is linked to the correct Owed_Amount ID. The Owed_Amount record itself should remain \'paid: false\' until the full balance is received. The system should automatically update the client\'s \'total_owed\' field, but please verify manually.',
        intended_for: 'Teammate',
        tags: 'billing, partial payment, finance, teammate, how-to',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: '\'Pending\': Project is awaiting client approval or initial deposit. \'Active\': Project is in progress. \'On Hold\': Project is paused, awaiting client assets or feedback. \'Completed\': All deliverables have been sent and final payment is received.',
        intended_for: 'General',
        tags: 'projects, definitions, status, general',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: 'All vendor invoices are processed on a NET 30 schedule. Please submit all invoices to billing@example.com by the 25th of the month to be included in the next payment cycle.',
        intended_for: 'Teammate',
        tags: 'vendors, payments, finance, teammate, policy',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    // This will delete all entries from the Wikis table
    await queryInterface.bulkDelete(options, null, {});
  }
};
