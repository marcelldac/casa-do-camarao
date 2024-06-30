import Dish from "../models/Dish.js";

export const renderCreateDish = (req, res) => {
  res.render("createDish", { logged: req.session.sessao });
};

export const postCreateDish = async (req, res) => {
  const { titulo, descricao } = req.body;
  try {
    await Dish.create({
      title: titulo,
      description: descricao,
      imageUrl: req.file.path,
    });
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.status(500).send("Erro ao criar o prato");
  }
};
