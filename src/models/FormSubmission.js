import { DataTypes } from 'sequelize';

import sequelize from '../config/database.js';

const FormSubmission = sequelize.define('FormSubmission', {
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  resume: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

export default FormSubmission;
