import User from '../models/User.js';
import bcrypt from 'bcrypt';

export const renderRegister = (_, res) => {
  res.render('register');
};

export const postRegister = async (req, res) => {
  const { usuario, senha } = req.body;

  const criptografia = bcrypt.hashSync(senha, 10);
  await User.create({ usuario, senha: criptografia });

  return res.send(
    '<script>alert("Registro realizado com sucesso! Por favor, faça login."); window.location.href = "/login";</script>'
  );
};
