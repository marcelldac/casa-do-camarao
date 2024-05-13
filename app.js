import express from 'express'
import { create } from 'express-handlebars'

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000
const HOST = 'http://localhost'

const app = express()
const hbs = create({
  helpers: {
    foo () { return 'foo' }
  }
})

app.engine('handlebars', hbs.engine)
app.enable('view cache')
app.set('view engine', 'handlebars')
app.set('views', './views')

const data = [
  {
    title: 'Camarão ao molho',
    description: 'Prepare-se para uma explosão de sabores! Nosso Camarão ao Molho é uma experiência gastronômica inigualável. Delicie-se com a suculência do camarão combinada com a riqueza e o aroma do nosso molho exclusivo. Cada garfada é uma jornada sensorial que o transportará diretamente para as águas profundas do mar. Venha saborear esta obra-prima em nosso restaurante e deixe-se levar pela harmonia dos sabores. Satisfação garantida em cada mordida. Mergulhe nessa experiência única!',
    url: 'https://assets.unileversolutions.com/recipes-v2/215163.jpg'
  },
  {
    title: 'Nosso delicioso camarão empanado',
    description: 'Em cada mordida, uma explosão de sabor! Nosso delicioso Camarão Empanado é uma verdadeira tentação para os amantes de frutos do mar. Crocante por fora e suculento por dentro, cada camarão é cuidadosamente preparado para garantir uma experiência gastronômica inesquecível. Na Casa do Camarão, elevamos o camarão empanado a um novo patamar de perfeição, utilizando ingredientes frescos e técnicas artesanais. Venha experimentar essa delícia em nosso restaurante e descubra por que nosso camarão empanado é tão aclamado. Uma vez que você prove, será impossível resistir. Aguardamos sua visita para uma verdadeira festa de sabores na Casa do Camarão!',
    url: 'https://s2.glbimg.com/tG3TBBfeETzX2ckBWisgM_GmXCQ=/620x480/smart/e.glbimg.com/og/ed/f/original/2020/01/24/receita-de-camarao-empanado-receita-de-arroz-com-brocolis-molho-beurre-blanc.jpg'
  },
  {
    title: 'Nosso delicioso camarão na panela',
    description: 'Delicie-se com o sabor do mar em sua própria cozinha! Apresentamos o Camarão na Panela, a estrela do seu próximo jantar. Frescor, praticidade e um sabor irresistível, tudo em um só prato. Leve para casa essa experiência gourmet e transforme suas refeições em momentos inesquecíveis. Experimente agora!',
    url: 'https://www.divinho.com.br/blog/wp-content/uploads/2021/08/Receitas-com-Camar%C3%A3o.jpg'
  },
]


app.get('/', (_, res) => {
  const shrimpImage1 = data[0].url
  const shrimpTitle1 = data[0].title
  const shrimpDescription1 = data[0].description
  const shrimpImage2 = data[1].url
  const shrimpTitle2 = data[1].title
  const shrimpDescription2 = data[1].description
  const shrimpImage3 = data[2].url
  const shrimpTitle3 = data[2].title
  const shrimpDescription3 = data[2].description

  const restaurantCopy1 = 'Na Casa do Camarão, cada prato é uma celebração do sabor do mar! Delicie-se com a frescura e a qualidade incomparáveis dos nossos frutos do mar. Das grelhas aos molhos irresistíveis, cada opção do nosso cardápio é cuidadosamente preparada para satisfazer os paladares mais exigentes. Em um ambiente acolhedor e charmoso, cada visita se torna uma experiência memorável. Venha se deliciar conosco e descubra por que somos o destino preferido dos amantes de frutos do mar. Reserve sua mesa agora e deixe-nos levá-lo em uma jornada gastronômica inesquecível na Casa do Camarão!'
  const restaurantCopyImage1 = 'https://imagens-cdn.canalrural.com.br/2024/01/camarao-camaroes-defeso-mpa.jpeg'

  const restaurantCopy2 = 'Na Casa do Camarão, não apenas os pratos são uma festa para os sentidos, mas também o ambiente em si é uma obra-prima. Situado em um cenário encantador, nosso restaurante combina o calor da hospitalidade com uma estética que evoca o charme do litoral. Desde o momento em que você pisa em nosso espaço, será cativado pela atmosfera acolhedora e pelo design cuidadosamente elaborado. Dos elegantes interiores à atmosfera relaxante do nosso espaço ao ar livre, cada detalhe foi pensado para criar uma experiência verdadeiramente memorável. Venha nos visitar e descubra a perfeita harmonia entre gastronomia de classe mundial e uma estrutura deslumbrante na Casa do Camarão. Estamos ansiosos para recebê-lo em nosso paraíso à beira-mar.'
  const restaurantCopyImage2 = 'https://www.wellplated.com/wp-content/uploads/2023/06/Grilled-Shrimp-Best-Ever.jpg'

  const actualYear = new Date().getFullYear()

  res.render('home', {
    showTitle: true,
    helpers: {
      foo() { return 'bar' }
    },
    shrimpImage1,
    shrimpTitle1,
    shrimpDescription1,
    shrimpImage2,
    shrimpTitle2,
    shrimpDescription2,
    shrimpImage3,
    shrimpTitle3,
    shrimpDescription3,
    restaurantCopy1,
    restaurantCopyImage1,
    restaurantCopy2,
    restaurantCopyImage2,
    actualYear
  })
})

app.listen(PORT, () => {
  console.log(`Server is running in ${HOST}:${PORT}`)
})