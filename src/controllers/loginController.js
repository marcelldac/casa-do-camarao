import User from '../models/User.js';
import bcrypt from 'bcrypt';

export const renderLogin = (req, res) => {
  res.render('login');
};

export const postLogin = async (req, res) => {
  const { usuario, senha } = req.body;
  const usuarioDoBanco = await User.findOne({ where: { usuario } });

  const senhaCorreta = bcrypt.compareSync(senha, usuarioDoBanco.senha);

  if (!usuarioDoBanco || !senhaCorreta) {
    res.status(401).send('Usuário ou senha inválidos');
  }

  req.session.sessao = usuarioDoBanco.dataValues;
  res.redirect('/');
};
