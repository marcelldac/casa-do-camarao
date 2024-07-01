import User from "../models/User.js";
import bcrypt from "bcrypt";

export async function authenticateUser(usuario, senha) {
  const user = await User.findOne({ where: { usuario } });
  const isMatch = user && bcrypt.compare(senha, user.senha);
  return isMatch ? user : null;
}
