'use strict';

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA; // use schema in production
}
// Sequelize automatically pluralizes the model name 'Project' to 'Projects'
options.tableName = 'Projects';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(options, [
      {
        client_id: 1, // Alice Johnson
        proj_title: 'E-commerce Website Redesign',
        proj_description: 'Full redesign of the existing Shopify store, integration with new payment gateway.',
        proj_date: new Date('2025-10-10T00:00:00Z'),
        notes: 'Client prefers a minimalist aesthetic. Weekly check-ins on Fridays.',
        due_date: new Date('2025-12-15T00:00:00Z'),
        is_done: false,
        proj_status: 'In Progress',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        client_id: 2, // Bob Smith
        proj_title: 'Business Plan Consultation',
        proj_description: 'One-time review and feedback session on the Q1 2026 business plan.',
        proj_date: new Date('2025-09-01T00:00:00Z'),
        notes: 'Client was very satisfied with the feedback.',
        due_date: new Date('2025-09-01T00:00:00Z'),
        is_done: true,
        proj_status: 'Completed',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        client_id: 3, // Charlie Brown
        proj_title: 'Custom Software Build',
        proj_description: 'Development of a custom inventory management tool.',
        proj_date: new Date('2025-08-15T00:00:00Z'),
        notes: 'Project on hold pending overdue payment. Client requested major revisions.',
        due_date: new Date('2025-11-01T00:00:00Z'),
        is_done: false,
        proj_status: 'On Hold (Overdue Payment)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        client_id: 4, // Diana Prince
        proj_title: 'Brand Identity Package',
        proj_description: 'Created new logo, brand guidelines, and marketing collateral.',
        proj_date: new Date('2025-05-10T00:00:00Z'),
        notes: 'Project completed successfully. Assistant was the main point of contact.',
        due_date: new Date('2025-06-15T00:00:00Z'),
        is_done: true,
        proj_status: 'Completed',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        client_id: 5, // Evan Wright
        proj_title: 'Basic Website Setup',
        proj_description: 'Setup of a 5-page informational website using a template.',
        proj_date: new Date('2025-11-01T00:00:00Z'),
        notes: 'Client needs training on how to update the blog.',
        due_date: new Date('2025-11-20T00:00:00Z'),
        is_done: false,
        proj_status: 'In Progress',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        client_id: 6, // Fiona Glenanne
        proj_title: 'Hourly Project Management',
        proj_description: 'Ongoing consultation for internal project rollout.',
        proj_date: new Date('2025-11-03T00:00:00Z'),
        notes: 'Client invoices weekly for hours worked.',
        due_date: null, // Ongoing
        is_done: false,
        proj_status: 'In Progress (Ongoing)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        client_id: 7, // George Kirk
        proj_title: 'IT Support Call',
        proj_description: 'One-off service call to fix a server issue.',
        proj_date: new Date('2025-04-09T00:00:00Z'),
        notes: 'Issue resolved in 1.5 hours.',
        due_date: new Date('2025-04-09T00:00:00Z'),
        is_done: true,
        proj_status: 'Completed',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        client_id: 8, // Hannah Abbott
        proj_title: 'Full Service Marketing Package',
        proj_description: 'Comprehensive 6-month marketing plan including SEO, social media, and PPC.',
        proj_date: new Date('2025-09-28T00:00:00Z'),
        notes: 'Client is on a partial payment plan. Next check-in scheduled.',
        due_date: new Date('2026-03-28T00:00:00Z'),
        is_done: false,
        proj_status: 'In Progress',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        client_id: 9, // Ian Malcolm
        proj_title: 'Speaking Engagement',
        proj_description: 'Keynote speaker for corporate event.',
        proj_date: new Date('2025-06-25T00:00:00Z'),
        notes: 'Event completed. Payment is disputed by client.',
        due_date: new Date('2025-06-25T00:00:00Z'),
        is_done: true,
        proj_status: 'Completed (Disputed)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        client_id: 10, // Jane Doe
        proj_title: 'Virtual Session Setup',
        proj_description: 'Initial planning for a series of virtual workshops.',
        proj_date: new Date('2025-11-04T00:00:00Z'),
        notes: 'Client needs to reschedule the first planning session. No firm start date yet.',
        due_date: null,
        is_done: false,
        proj_status: 'Planning',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    // This will delete all entries from the Projects table
    await queryInterface.bulkDelete(options, null, {});
  }
};
