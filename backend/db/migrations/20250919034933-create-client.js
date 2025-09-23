'use strict';

/** @type {import('sequelize-cli').Migration} */
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA; // use schema in production
}

module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'Clients';
    await queryInterface.createTable(options, {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      client_uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
      },
      client_full_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      client_codes: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        validate: {
          isEmail: true
        }
      },
      address: {
        type: Sequelize.STRING
      },
      unit_number: {
        type: Sequelize.INTEGER
      },
      role: {
        type: Sequelize.STRING
      },
      active_project: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      owed_status: {
        type: Sequelize.STRING
      },
      needs_session: {
        type: Sequelize.STRING
      },
      booking_instructions: {
        type: Sequelize.STRING
      },
      ready_to_invoice: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      pricing_quoted: {
        type: Sequelize.STRING
      },
      total_owed: {
        type: Sequelize.FLOAT,
        defaultValue: 0.0
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Clients';
    await queryInterface.dropTable(options);
  }
};
