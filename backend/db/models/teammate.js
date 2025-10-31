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
    }
  }
  Teammate.init({
    id: DataTypes.INTEGER,
    uuid: DataTypes.STRING,
    name: DataTypes.STRING,
    hired: DataTypes.DATE,
    primary_focus: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Teammate',
  });
  return Teammate;
};