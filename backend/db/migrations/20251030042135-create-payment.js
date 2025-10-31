'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Payments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uuid: {
        type: Sequelize.UUIDV4,
        allowNull: false,
      },
      order_number: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      payment_amount: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      payment_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
      },
      paid: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      payment_method: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      owed_amounts: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        allowNull: false,
      },
      client_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      notes: {
        type: Sequelize.STRING,
        allowNull: true,
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
    await queryInterface.dropTable('Payments');
  }
};
