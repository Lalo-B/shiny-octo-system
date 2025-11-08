'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wiki extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Wiki.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: { msg: 'Wiki text content is required.' },
        len: {
          args: [10, 65535], // Min 10 characters, max for TEXT
          msg: 'Wiki text must be at least 10 characters long.'
        }
      }
    },
    intended_for: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'General',
      validate: {
        notNull: { msg: 'Must specify who this wiki is intended for.' },
        // Based on your seeder file
        isIn: {
          args: [['Client', 'Teammate', 'General']],
          msg: 'Invalid "intended_for" value. Must be Client, Teammate, or General.'
        }
      }
    },
    tags: {
      type: DataTypes.TEXT, // Changed to TEXT to allow for many tags
      allowNull: true, // Tags can be optional
      validate: {
        // Custom validation to ensure it's a comma-separated string if provided
        // Allows letters, numbers, hyphens, and spaces within tags
        isCommaSeparated(value) {
          if (value && value.length > 0 && !/^[\w\s-]+(?:,\s*[\w\s-]+)*$/.test(value)) {
            throw new Error('Tags must be a comma-separated list (e.g., "billing, how-to, client").');
          }
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Wiki',
    timestamps: true // Adds createdAt and updatedAt
  });
  return Wiki;
};
