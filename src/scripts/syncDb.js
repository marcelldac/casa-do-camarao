import sequelize from '../config/database.js';

const syncDb = async () => {
  try {
    await sequelize.sync({ force: process.env.NODE_ENV === 'development' ? true : false });
    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('Error synchronizing the database:', error);
  } finally {
    await sequelize.close();
  }
};

syncDb();
