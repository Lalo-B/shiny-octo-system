'use strict';

const { all } = require("../../routes/api");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA; // use schema in production
}

module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'Owed_Amounts';
    await queryInterface.createTable(options, {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      amount: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      date_invoiced: {
        type: Sequelize.DATE
      },
      session_date: {
        type: Sequelize.DATE
      },
      concierge_biller: {
        type: Sequelize.STRING
      },
      client_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'Clients'
          },
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      service_type: {
        type: Sequelize.STRING
      },
      retailer: {
        type: Sequelize.STRING
      },
      order_number: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      paid: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      invoiced: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      details: {
        type: Sequelize.STRING,
        defaultValue: false,
      },
      payment_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: {
            tableName: 'Payments'
          },
          key: 'id'
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
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
    options.tableName = 'Owed_Amounts';
    await queryInterface.dropTable(options);
  }
};
