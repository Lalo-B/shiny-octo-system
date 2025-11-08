'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Session extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define associations here, for example:
      // Session.belongsTo(models.Client, { foreignKey: 'client_id', as: 'client' });
      // Session.belongsTo(models.Teammate, { foreignKey: 'worker_id', as: 'worker' });
    }
  }
  Session.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    session_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW, // Default to the time of creation
      validate: {
        notNull: { msg: 'Session date is required.' },
        isDate: { msg: 'Must be a valid date.' }
      }
    },
    notes: {
      type: DataTypes.TEXT, // Changed to TEXT for longer notes
      allowNull: true // Notes can be optional
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'Client ID is required.' },
        isInt: { msg: 'Client ID must be an integer.' }
      },
      references: {
        model: 'Clients', // Assumes 'Clients' table
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE' // If a client is deleted, delete their sessions
    },
    worker_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'Worker ID (Teammate ID) is required.' },
        isInt: { msg: 'Worker ID must be an integer.' }
      },
      references: {
        model: 'Teammates', // Assumes 'Teammates' table
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL' // Keep session log even if teammate is deleted
    },
    payment_collected: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false // Default to payment not collected
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Duration is required.' },
        len: {
          args: [3, 100],
          msg: 'Duration must be between 3 and 100 characters (e.g., "1 hour").'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Session',
    timestamps: true // Adds createdAt and updatedAt
  });
  return Session;
};
