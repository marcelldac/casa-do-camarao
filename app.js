import express from 'express'
import { create } from 'express-handlebars'

import { data, actualYear, restaurantCopy1, restaurantCopy2, restaurantCopyImage1, restaurantCopyImage2, shrimpDescription1, shrimpDescription2, shrimpDescription3, shrimpImage1, shrimpImage2, shrimpImage3, shrimpTitle1,shrimpTitle2, shrimpTitle3 } from './data.js'

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

app.get('/', (_, res) => {
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

app.get('/menu', (_, res) => {
  const number = '557185211804'
  res.render('menu', {
    helpers: {
      foo() { return 'bar' },
      data,
      number,
      shrimpImage1,
      shrimpTitle1,
      shrimpDescription1,
      shrimpImage2,
      shrimpTitle2,
      shrimpDescription2,
      shrimpImage3,
      shrimpTitle3,
      shrimpDescription3,
      restaurantCopyImage1,
      restaurantCopyTitle1: 'Camarão Marinho KG',
      restaurantCopyDescription1: 'O melhor camarão marinho que você verá nas próximas décadas. Uma mistura de suculência e crocância.',
      restaurantMenuImage1: 'https://istoedinheiro.com.br/wp-content/uploads/sites/17/2023/01/11-3.jpg',
      restaurantMenuTitle1: 'Camarão Carabineiro KG',
      restaurantMenuDescription1: 'Pescado a mais de 500 metros de profundidade, em fundos de areia jamais tocada, o camarão carabineiro é muito apreciado na Casa do Camarão. De cor vermelha intensa, sabor marcante e alta crocância, ele se destaca pelo tamanho avantajado.',
      restaurantMenuImage2: 'https://live.staticflickr.com/6234/6380665035_9a530dd1ee_b.jpg',
      restaurantMenuTitle2: 'Camarão da Costa Negra',
      restaurantMenuDescription2: 'A região da Costa Negra cearense é uma das mais belas áreas litorâneas do Brasil. Com paisagens encantadoras e praias paradisíacas, a região ganhou espaço no cenário nacional e internacional pela qualidade dos camarões que ali habitam. Uma iguaria de alta qualidade, produzida de forma ecologicamente correta, com características únicas! Uma verdadeira especialidade!',
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server is running in ${HOST}:${PORT}`)
})