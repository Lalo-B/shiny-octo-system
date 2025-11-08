'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teammate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // For example:
      // Teammate.hasMany(models.Session, {
      //   foreignKey: 'worker_id',
      //   as: 'sessions'
      // });
    }
  }
  Teammate.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
      validate: {
        notNull: { msg: 'Teammate UUID is required.' },
        isUUID: { args: 4, msg: 'Must be a valid UUIDv4.' }
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Teammate name is required.' },
        len: {
          args: [2, 255],
          msg: 'Name must be between 2 and 255 characters.'
        }
      }
    },
    hired: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      validate: {
        notNull: { msg: 'Hire date is required.' },
        isDate: { msg: 'Must be a valid date.' }
      }
    },
    primary_focus: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'General',
      validate: {
        notNull: { msg: 'Primary focus is required.' },
        // Based on your seeder file
        isIn: {
          args: [['Project Management', 'Client Relations', 'Billing & Invoicing', 'General', 'Admin']],
          msg: 'Invalid primary focus specified.'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: { msg: 'Email is required.' },
        isEmail: { msg: 'Must be a valid email address.' }
      }
    },
    phone: {
      type: DataTypes.STRING, // Changed from INTEGER to STRING
      allowNull: true, // Phone can be optional
      unique: true,
      validate: {
        // Basic validation for a US-style phone number (10 digits, optional formatting)
        is: {
          args: [/^(?:\+?1[ -]?)?\(?([0-9]{3})\)?[ -]?([0-9]{3})[ -]?([0-9]{4})$/],
          msg: 'Must be a valid phone number (e.g., 555-123-4567).'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Teammate',
    timestamps: true // Adds createdAt and updatedAt
  });
  return Teammate;
};
