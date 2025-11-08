'use strict';

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA; // use schema in production
}
// The modelName is 'Owed_Amount' but the tableName is 'Owed_Amounts'
options.tableName = 'Owed_Amounts';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(options, [
      {
        amount: 1500.00,
        date_invoiced: new Date('2025-10-15T09:00:00Z'),
        session_date: new Date('2025-10-10T14:00:00Z'),
        concierge_biller: 'Admin',
        client_id: 1, // Alice Johnson
        service_type: 'Standard Package',
        retailer: null,
        order_number: null,
        url: null,
        paid: false,
        invoiced: true,
        details: 'Initial project invoice for Standard Package.',
        payment_id: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        amount: 250.00,
        date_invoiced: new Date('2025-09-01T10:00:00Z'),
        session_date: new Date('2025-09-01T09:00:00Z'),
        concierge_biller: 'Admin',
        client_id: 2, // Bob Smith
        service_type: 'Consultation',
        retailer: null,
        order_number: null,
        url: null,
        paid: true,
        invoiced: true,
        details: 'One-time consultation fee.',
        payment_id: null, // Would be linked if a payment seeder ran
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        amount: 5000.00,
        date_invoiced: new Date('2025-08-20T11:00:00Z'),
        session_date: new Date('2025-08-15T10:00:00Z'),
        concierge_biller: 'Admin',
        client_id: 3, // Charlie Brown
        service_type: 'Custom Project',
        retailer: null,
        order_number: null,
        url: null,
        paid: false,
        invoiced: true,
        details: 'Invoice #1001 - Custom Project (Overdue).',
        payment_id: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        amount: 800.00,
        date_invoiced: null,
        session_date: new Date('2025-11-01T16:00:00Z'),
        concierge_biller: 'BillerBot',
        client_id: 5, // Evan Wright
        service_type: 'Basic Package',
        retailer: null,
        order_number: null,
        url: null,
        paid: false,
        invoiced: false,
        details: 'Session completed, pending invoice generation.',
        payment_id: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        amount: 450.00,
        date_invoiced: new Date('2025-11-04T09:00:00Z'),
        session_date: new Date('2025-11-03T13:00:00Z'),
        concierge_biller: 'Admin',
        client_id: 6, // Fiona Glenanne
        service_type: 'Hourly',
        retailer: null,
        order_number: null,
        url: null,
        paid: false,
        invoiced: true,
        details: '3 hours @ $150/hr for project consultation.',
        payment_id: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        amount: 2200.00,
        date_invoiced: new Date('2025-10-01T09:00:00Z'),
        session_date: new Date('2025-09-28T10:00:00Z'),
        concierge_biller: 'Admin',
        client_id: 8, // Hannah Abbott
        service_type: 'Full Package',
        retailer: null,
        order_number: null,
        url: null,
        paid: false, // Client seeder says "Partial Payment", so the invoice itself isn't fully paid
        invoiced: true,
        details: 'Total cost for Full Package. Payment plan active.',
        payment_id: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        amount: 10000.00,
        date_invoiced: new Date('2025-07-01T09:00:00Z'),
        session_date: new Date('2025-06-25T15:00:00Z'),
        concierge_biller: 'Legal Dept.',
        client_id: 9, // Ian Malcolm
        service_type: 'Appearance Fee',
        retailer: null,
        order_number: null,
        url: null,
        paid: false,
        invoiced: true,
        details: 'Invoice #7001 - Disputed by client.',
        payment_id: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        amount: 120.50,
        date_invoiced: null,
        session_date: new Date('2025-11-05T10:00:00Z'),
        concierge_biller: 'BillerBot',
        client_id: 1, // Alice Johnson (a second item)
        service_type: 'Retail Purchase',
        retailer: 'StyleHub',
        order_number: 'SH-90210',
        url: 'https://stylehub.example.com/order/SH-90210',
        paid: false,
        invoiced: false,
        details: 'Client reimbursement for product purchase.',
        payment_id: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        amount: 75.00,
        date_invoiced: new Date('2025-11-01T00:00:00Z'),
        session_date: null,
        concierge_biller: 'BillerBot',
        client_id: 3, // Charlie Brown (a second item)
        service_type: 'Subscription Fee',
        retailer: null,
        order_number: 'SUB-110125',
        url: null,
        paid: false,
        invoiced: true,
        details: 'Monthly platform fee for November 2025.',
        payment_id: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        amount: 300.00,
        date_invoiced: new Date('2025-04-10T09:00:00Z'),
        session_date: new Date('2025-04-09T11:00:00Z'),
        concierge_biller: 'Admin',
        client_id: 7, // George Kirk
        service_type: 'One-off',
        retailer: null,
        order_number: null,
        url: null,
        paid: true,
        invoiced: true,
        details: 'Single service render (Archive).',
        payment_id: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    // This will delete all entries from the Owed_Amounts table
    await queryInterface.bulkDelete(options, null, {});
  }
};
