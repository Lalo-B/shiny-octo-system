'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define associations here, for example:
      // Payment.belongsTo(models.Client, {
      //   foreignKey: 'client_id',
      //   as: 'client'
      // });
      // Payment.hasMany(models.Owed_Amount, {
      //   foreignKey: 'payment_id',
      //   as: 'owedAmounts'
      // });
    }
  }
  Payment.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, // Automatically generate a UUID
      allowNull: false,
      unique: true,
      validate: {
        notNull: { msg: 'Payment UUID is required.' },
        isUUID: { args: 4, msg: 'Must be a valid UUIDv4.' }
      }
    },
    order_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true, // Assuming each payment has a unique order number
      validate: {
        notNull: { msg: 'Order number is required.' },
        isInt: { msg: 'Order number must be an integer.' }
      }
    },
    payment_amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notNull: { msg: 'Payment amount is required.' },
        isFloat: { msg: 'Payment amount must be a number.' },
        min: {
          args: [0.01],
          msg: 'Payment amount must be at least $0.01.'
        }
      }
    },
    payment_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1, // Default to the first payment
      validate: {
        isInt: { msg: 'Payment number must be an integer.' },
        min: {
          args: [1],
          msg: 'Payment number must be at least 1.'
        }
      }
    },
    paid: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false // Payments are created as 'unpaid' by default
    },
    payment_method: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Payment method is required.' },
        isIn: {
          // Restrict to a specific list of allowed values
          args: [['Stripe', 'Credit Card', 'Bank Transfer', 'ACH Transfer', 'PayPal', 'Other']],
          msg: 'Invalid payment method specified.'
        }
      }
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'Client ID is required.' },
        isInt: { msg: 'Client ID must be an integer.' }
      },
      // Add foreign key constraint (matches pattern from your other models)
      references: {
        model: 'Clients', // Name of the target table
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE' // If a client is deleted, delete their payments
    },
    notes: {
      type: DataTypes.TEXT, // Changed to TEXT for longer notes
      allowNull: true // Notes are optional
    }
  }, {
    sequelize,
    modelName: 'Payment',
    timestamps: true // Ensure createdAt and updatedAt are managed
  });
  return Payment;
};
