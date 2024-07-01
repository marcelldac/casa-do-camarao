import express from "express";
import bodyParser from "body-parser";
import { create } from "express-handlebars";
import { renderHome } from "./controllers/homeController.js";
import { renderMenu } from "./controllers/menuController.js";
import { postLogin, renderLogin } from "./controllers/loginController.js";
import {
  postRegister,
  renderRegister,
} from "./controllers/registerController.js";
import {
  postCreateDish,
  renderCreateDish,
} from "./controllers/createDishController.js";
import sequelize from "./config/database.js";
import session from "express-session";
import multer from "multer";

const PORT = process.env.PORT ? Number(process.env.PORT) : 3333;
const HOST = "http://localhost";

const app = express();
const hbs = create({
  defaultLayout: "main",
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
  },
  partialsDirs: ["views/partials"],
});

app.engine("handlebars", hbs.engine);
app.enable("view cache");
app.set("view engine", "handlebars");
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, httpOnly: true },
  })
);
app.set("views", "./src/views");
app.use("/uploads", express.static("uploads"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", renderHome);
app.get("/menu", renderMenu);
app.get("/login", renderLogin);
app.post("/login", postLogin);
app.get("/register", renderRegister);
app.post("/register", postRegister);
app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});
app.get("/create-dish", renderCreateDish);
const upload = multer({ dest: "uploads/" });
app.post("/create-dish", upload.single("urlImg"), postCreateDish);

const startServer = async () => {
  try {
    await sequelize.sync();
    await sequelize.authenticate();
    console.log("Banco de dados conectado com sucesso.");

    app.listen(PORT, () => {
      console.log(`Servidor rodando em ${HOST}:${PORT}`);
    });
  } catch (error) {
    console.error("Não foi possível conectar ao banco de dados:", error);
  }
};

startServer();
