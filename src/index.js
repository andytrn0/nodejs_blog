const path = require('path')
// const _dirname = path.dirname(__filename);
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const port = 3000

const route = require('./routes')
const db = require('./config/db')

db.connect()

app.use(express.static(path.join(__dirname, 'public')))

//HTTO logger

app.use(morgan('combined'))

//Template engine
app.engine(
  'hbs',
  handlebars.engine({
    extname: '.hbs',
  })
)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources\\views'))

route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
