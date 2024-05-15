import { data, shrimpImages, shrimpTitles, shrimpDescriptions, restaurantCopyImage1, actualYear } from '../data/data.js';

export const renderMenu = (req, res) => {
  const number = '557185211804';
  res.render('menu', {
    data,
    number,
    shrimpImage1: shrimpImages[0],
    shrimpTitle1: shrimpTitles[0],
    shrimpDescription1: shrimpDescriptions[0],
    shrimpImage2: shrimpImages[1],
    shrimpTitle2: shrimpTitles[1],
    shrimpDescription2: shrimpDescriptions[1],
    shrimpImage3: shrimpImages[2],
    shrimpTitle3: shrimpTitles[2],
    shrimpDescription3: shrimpDescriptions[2],
    restaurantCopyImage1,
    restaurantCopyTitle1: 'Camarão Marinho KG',
    restaurantCopyDescription1: 'O melhor camarão marinho que você verá nas próximas décadas. Uma mistura de suculência e crocância.',
    restaurantMenuImage1: 'https://istoedinheiro.com.br/wp-content/uploads/sites/17/2023/01/11-3.jpg',
    restaurantMenuTitle1: 'Camarão Carabineiro KG',
    restaurantMenuDescription1: 'Pescado a mais de 500 metros de profundidade, em fundos de areia jamais tocada, o camarão carabineiro é muito apreciado na Casa do Camarão. De cor vermelha intensa, sabor marcante e alta crocância, ele se destaca pelo tamanho avantajado.',
    restaurantMenuImage2: 'https://live.staticflickr.com/6234/6380665035_9a530dd1ee_b.jpg',
    restaurantMenuTitle2: 'Camarão da Costa Negra',
    restaurantMenuDescription2: 'A região da Costa Negra cearense é uma das mais belas áreas litorâneas do Brasil. Com paisagens encantadoras e praias paradisíacas, a região ganhou espaço no cenário nacional e internacional pela qualidade dos camarões que ali habitam. Uma iguaria de alta qualidade, produzida de forma ecologicamente correta, com características únicas! Uma verdadeira especialidade!',
    actualYear
  });
};
