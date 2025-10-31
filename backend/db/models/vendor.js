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
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    about: DataTypes.STRING,
    service_tag: DataTypes.STRING,
    office_phone: DataTypes.INTEGER,
    mobile_phone: DataTypes.INTEGER,
    primary_rep_name: DataTypes.STRING,
    website: DataTypes.STRING,
    total_paid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Vendor',
  });
  return Vendor;
};