import sequelize from '../config/database.js';

const syncDb = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Banco sincronizado.');
  } catch (error) {
    console.error('Erro ao sincronizar o banco:', error);
  } finally {
    await sequelize.close();
  }
};

syncDb();
