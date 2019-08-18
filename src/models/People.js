const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const PeopleSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  altura: {
    type: Number,
    required: true,
  },
  peso: {
    type: Number,
    required: true,
  },
  corDoCabelo: {
    type: String,
    required: false,
  },
  corDaPele: {
    type: String,
    required: false,
  },
  corDosOlhos: {
    type: String,
    required: false,
  },
  dataDeNascimento: {
    type: Date,
    required: true,
  },
  genero: {
    type: String,
    required: false,
  },
  terraNatal: {
    type: String,
    required: false,
  },
  filme: {
    type: String,
    required: false,
  },
  especie: {
    type: String,
    required: false,
  },
  veiculo: {
    type: String,
    required: false,
  },
  nave: {
    type: String,
    required: false,
  },
  criadoEm: {
    type: Date,
    default: Date.now,
  },
  editadoEm: {
    type: Date,
    default: Date.now,
  },
  url: {
    type: String,
    required: false,
  },
})

PeopleSchema.plugin(mongoosePaginate)

mongoose.model('People', PeopleSchema)
