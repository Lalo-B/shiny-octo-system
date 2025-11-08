'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vendor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Vendor.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Assuming vendor names should be unique
      validate: {
        notNull: { msg: 'Vendor name is required.' },
        len: {
          args: [2, 255],
          msg: 'Vendor name must be between 2 and 255 characters.'
        }
      }
    },
    about: {
      type: DataTypes.TEXT, // Changed to TEXT for longer descriptions
      allowNull: true
    },
    service_tag: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Service tag is required.' },
        // Based on your seeder file
        isIn: {
          args: [['Software', 'Supplies', 'Hosting', 'Marketing', 'Contractor', 'Other']],
          msg: 'Invalid service tag.'
        }
      }
    },
    office_phone: {
      type: DataTypes.STRING, // Changed from INTEGER
      allowNull: true,
      validate: {
        is: {
          args: [/^(?:\+?1[ -]?)?\(?([0-9]{3})\)?[ -]?([0-9]{3})[ -]?([0-9]{4})$/],
          msg: 'Must be a valid office phone number (e.g., 555-123-4567).'
        }
      }
    },
    mobile_phone: {
      type: DataTypes.STRING, // Changed from INTEGER
      allowNull: true,
      validate: {
        is: {
          args: [/^(?:\+?1[ -]?)?\(?([0-9]{3})\)?[ -]?([0-9]{3})[ -]?([0-9]{4})$/],
          msg: 'Must be a valid mobile phone number (e.g., 555-123-4567).'
        }
      }
    },
    primary_rep_name: {
      type: DataTypes.STRING,
      allowNull: true // Can be optional
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true, // Website is optional
      validate: {
        isUrl: { msg: 'Must be a valid URL (e.g., https://example.com).' }
      }
    },
    total_paid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        notNull: { msg: 'Total paid is required.' },
        isInt: { msg: 'Total paid must be an integer.' },
        min: {
          args: [0],
          msg: 'Total paid cannot be negative.'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Vendor',
    timestamps: true // Adds createdAt and updatedAt
  });
  return Vendor;
};
