const mongoose = require('mongoose')

const People = mongoose.model('People')

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query
    const peoples = await People.paginate({}, { page, limit: 10 })

    return res.json(peoples)
  },

  async show(req, res) {
    const people = await People.findById(req.params.id)

    return res.json(people)
  },

  async store(req, res) {
    const people = await People.create(req.body)

    return res.json(people)
  },

  async update(req, res) {
    const people = await People.findByIdAndUpdate(req.params.id, req.body, { new: true })

    return res.json(people)
  },

  async destroy(req, res) {
    await People.findByIdAndRemove(req.params.id)

    return res.send()
  },
}
