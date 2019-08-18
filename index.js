const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

const PORT = 3001
const HOST = '0.0.0.0'

//inicia o App
const app = express()
app.use(express.json())
app.use(cors())

//inicia o DB

const db = async () => {
  try {
    await mongoose.connect(
      'mongodb://mongo/star',
      { useNewUrlParser: true }
    )
  } catch (error) {
    console.log(error)
  }
}

db()

requireDir('./src/models')

//rotas
app.use('/api', require('./src/routes'))

app.listen(PORT, HOST)
