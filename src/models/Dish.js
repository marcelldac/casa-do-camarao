import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

export const Dish = sequelize.define('dishes', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Dish;
