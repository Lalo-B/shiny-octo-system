'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    static associate(models) {
      Client.hasMany(models.Owed_Amount, {
        foreignKey: 'client_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }

  Client.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      client_uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
      },
      client_full_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      client_codes: {
        type: DataTypes.STRING
      },
      phone: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true
        }
      },
      address: {
        type: DataTypes.STRING
      },
      unit_number: {
        type: DataTypes.INTEGER
      },
      role: {
        type: DataTypes.STRING
      },
      active_project: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      owed_status: {
        type: DataTypes.STRING
      },
      needs_session: {
        type: DataTypes.STRING
      },
      booking_instructions: {
        type: DataTypes.STRING
      },
      ready_to_invoice: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      pricing_quoted: {
        type: DataTypes.STRING
      },
      total_owed: {
        type: DataTypes.FLOAT,
        defaultValue: 0.0
      }
    },
    {
      sequelize,
      modelName: 'Client',
      tableName: 'Clients',
      timestamps: true
    }
  );

  return Client;
};
