'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Owed_Amount extends Model {
    static associate(models) {
      // each owed amount belongs to a client
      Owed_Amount.belongsTo(models.Client, {
        foreignKey: 'client_id',
        as: 'client',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }

  Owed_Amount.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      amount: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      date_invoiced: {
        type: DataTypes.DATE
      },
      session_date: {
        type: DataTypes.DATE
      },
      concierge_biller: {
        type: DataTypes.STRING
      },
      client_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      expense_type: {
        type: DataTypes.STRING
      },
      retailer: {
        type: DataTypes.STRING
      },
      order_number: {
        type: DataTypes.STRING
      },
      url: {
        type: DataTypes.STRING
      },
      paid: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      invoiced: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {
      sequelize,
      modelName: 'Owed_Amount',
      tableName: 'Owed_Amounts',
      timestamps: true
    }
  );

  return Owed_Amount;
};
