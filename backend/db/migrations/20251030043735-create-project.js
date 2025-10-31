'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      client_id: {
        type: Sequelize.INTEGER
      },
      proj_title: {
        type: Sequelize.STRING
      },
      proj_description: {
        type: Sequelize.STRING
      },
      proj_date: {
        type: Sequelize.DATE
      },
      notes: {
        type: Sequelize.STRING
      },
      due_date: {
        type: Sequelize.DATE
      },
      is_done: {
        type: Sequelize.BOOLEAN
      },
      proj_status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Projects');
  }
};