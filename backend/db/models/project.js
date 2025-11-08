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
      // For example:
      // Project.belongsTo(models.Client, {
      //   foreignKey: 'client_id',
      //   as: 'client'
      // });
    }
  }
  Project.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'Client ID is required.' },
        isInt: { msg: 'Client ID must be an integer.' }
      },
      references: {
        model: 'Clients', // Name of the target table
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE' // If a client is deleted, delete their projects
    },
    proj_title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Project title is required.' },
        len: {
          args: [3, 255],
          msg: 'Project title must be between 3 and 255 characters.'
        }
      }
    },
    proj_description: {
      type: DataTypes.TEXT, // Changed to TEXT for longer descriptions
      allowNull: true // Description can be optional
    },
    proj_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW, // Default project date to creation time
      validate: {
        isDate: { msg: 'Must be a valid project date.' }
      }
    },
    notes: {
      type: DataTypes.TEXT, // Changed to TEXT for longer notes
      allowNull: true
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: true, // A project might not have a firm due date
      validate: {
        isDate: { msg: 'Must be a valid due date.' },
        // Custom validator to ensure due_date is after proj_date
        isAfterProjectDate(value) {
          if (value && this.proj_date && new Date(value) < new Date(this.proj_date)) {
            throw new Error('Due date must be after the project start date.');
          }
        }
      }
    },
    is_done: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false // Projects are not done by default
    },
    proj_status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Planning',
      validate: {
        notNull: { msg: 'Project status is required.' },
        isIn: {
          // List of allowed statuses from your seeder, plus a default
          args: [['Planning', 'In Progress', 'On Hold (Overdue Payment)', 'In Progress (Ongoing)', 'Completed', 'Completed (Disputed)', 'On Hold']],
          msg: 'Invalid project status.'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Project',
    timestamps: true // Adds createdAt and updatedAt
  });
  return Project;
};
