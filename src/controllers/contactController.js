import { actualYear } from '../data/data.js';
import FormSubmission from '../models/FormSubmission.js';

export const renderContact = (_, res) => {
  res.render('contact', { actualYear });
};

export const submitForm = async (req, res) => {
  const { email, message } = req.body;
  const resume = req.file ? req.file.filename : null;

  if (!email || !message) {
    return res.status(400).send("Dados incompletos, formulário não foi enviado. Tente novamente.");
  }

  try {
    await FormSubmission.create({ email, message, resume });
    res.send('Formulário enviado com sucesso!');
  } catch (error) {
    console.error('Error saving form submission:', error);
    res.status(500).send('Erro ao salvar os dados do formulário. Tente novamente.');
  }
};

export const viewSubmissions = async (_, res) => {
  try {
    const submissions = await FormSubmission.findAll();
    res.render('submissions', { submissions, actualYear });
  } catch (error) {
    console.error('Error retrieving submissions:', error);
    res.status(500).send('Erro ao recuperar os dados do formulário.');
  }
};
