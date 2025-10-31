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
      // define association here
    }
  }
  Payment.init({
    id: DataTypes.STRING,
    uuid: DataTypes.STRING,
    order_number: DataTypes.INTEGER,
    payment_amount: DataTypes.FLOAT,
    payment_number: DataTypes.INTEGER,
    paid: DataTypes.BOOLEAN,
    payment_method: DataTypes.STRING,
    owed_amounts: DataTypes.ARRAY(DataTypes.INTEGER),
    client_id: DataTypes.INTEGER,
    notes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Payment',
  });
  return Payment;
};
