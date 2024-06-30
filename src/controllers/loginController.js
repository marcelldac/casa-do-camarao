import { authenticateUser } from "../services/authentication.js";

export const renderLogin = (req, res) => {
  res.render("login");
};

export const postLogin = async (req, res) => {
  const { usuario, senha } = req.body;

  const user = await authenticateUser(usuario, senha);
  if (!user) {
    res.status(401).send("Usuário ou senha inválidos");
  }

  req.session.sessao = user.dataValues;
  res.redirect("/");
};
