'use strict';

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA; // use schema in production
}
// Sequelize automatically pluralizes the model name 'Vendor' to 'Vendors'
options.tableName = 'Vendors';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(options, [
      {
        name: 'SaaS Solutions Inc.',
        about: 'Provides subscription-based CRM and project management software.',
        service_tag: 'Software',
        office_phone: 8005551000,
        mobile_phone: 8005551001,
        primary_rep_name: 'Emily White',
        website: 'https://saassolutions.example.com',
        total_paid: 12000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'OfficePro Supplies',
        about: 'Bulk provider of office furniture and consumable supplies.',
        service_tag: 'Supplies',
        office_phone: 8881234567,
        mobile_phone: null,
        primary_rep_name: 'David Lee',
        website: 'https://officepro.example.com',
        total_paid: 3500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'CloudHost LLC',
        about: 'Managed web hosting and cloud infrastructure provider.',
        service_tag: 'Hosting',
        office_phone: 8779876543,
        mobile_phone: 8779876544,
        primary_rep_name: 'Tech Support',
        website: 'https://cloudhost.example.com',
        total_paid: 2400,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'GrowthMarketers',
        about: 'Digital marketing agency specializing in SEO and PPC campaigns.',
        service_tag: 'Marketing',
        office_phone: 8662223333,
        mobile_phone: 8662223344,
        primary_rep_name: 'Jessica Miller',
        website: 'https://growthmarketers.example.com',
        total_paid: 7500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'John Doe Design',
        about: 'Freelance graphic designer for branding and web assets.',
        service_tag: 'Contractor',
        office_phone: null,
        mobile_phone: 5558675309,
        primary_rep_name: 'John Doe',
        website: null,
        total_paid: 1800,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    // This will delete all entries from the Vendors table
    await queryInterface.bulkDelete(options, null, {});
  }
};
