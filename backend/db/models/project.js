'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Project.init({
    id: DataTypes.INTEGER,
    client_id: DataTypes.INTEGER,
    proj_title: DataTypes.STRING,
    proj_description: DataTypes.STRING,
    proj_date: DataTypes.DATE,
    notes: DataTypes.STRING,
    due_date: DataTypes.DATE,
    is_done: DataTypes.BOOLEAN,
    proj_status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};