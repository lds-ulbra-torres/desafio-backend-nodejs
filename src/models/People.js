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
  // peso: {
  //   type: Number,
  //   required: true,
  // },
  // corDoCabelo: {
  //   type: String,
  //   required: true,
  // },
  // corDaPele: {
  //   type: String,
  //   required: true,
  // },
  // corDosOlhos: {
  //   type: String,
  //   required: true,
  // },
  // dataDeNascimento: {
  //   type: Date,
  //   required: true,
  // },
  // genero: {
  //   type: String,
  //   required: true,
  // },
  // terraNatal: {
  //   type: String,
  //   required: true,
  // },
  // filme: {
  //   type: String,
  //   required: true,
  // },
  // especie: {
  //   type: String,
  //   required: true,
  // },
  // veiculo: {
  //   type: String,
  //   required: true,
  // },
  // nave: {
  //   type: String,
  //   required: true,
  // },
  criadoEm: {
    type: Date,
    default: Date.now,
  },
  // editadoEm: {
  //   type: Date,
  //   default: Date.now,
  // },
  // url: {
  //   type: String,
  //   required: true,
  // },
})

PeopleSchema.plugin(mongoosePaginate)

mongoose.model('People', PeopleSchema)
