import express from 'express'
import { create, engine } from 'express-handlebars'

const PORT = process.env.PORT ? Number(process.env.PORT) : 3333
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
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server is running in ${HOST}:${PORT}`)
})