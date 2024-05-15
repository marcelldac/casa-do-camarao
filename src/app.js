import express from 'express';
import { create } from 'express-handlebars';
import sequelize from './config/database.js';

import { renderHome } from './controllers/homeController.js';
import { renderMenu } from './controllers/menuController.js';
import { renderContact, submitForm, viewSubmissions } from './controllers/contactController.js';

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
const HOST = 'http://localhost';

const app = express();
const hbs = create({
  defaultLayout: 'main',
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true
  }
});

app.engine('handlebars', hbs.engine);
app.enable('view cache');
app.set('view engine', 'handlebars');
app.set('views', './src/views');

app.use(express.urlencoded({ extended: true }));

app.get('/', renderHome);
app.get('/menu', renderMenu);
app.get('/contact', renderContact);
app.post('/submit', submitForm);
app.get('/submissions', viewSubmissions);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');

    app.listen(PORT, () => {
      console.log(`Server is running in ${HOST}:${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer();
