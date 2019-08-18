const express = require('express')
const routes = express.Router()

const PeopleController = require('./controllers/PeopleControlller')

routes.get('/peoples', PeopleController.index)
routes.get('/peoples/:id', PeopleController.show)
routes.post('/peoples', PeopleController.store)
routes.put('/peoples/:id', PeopleController.update)
routes.delete('/peoples/:id', PeopleController.destroy)

module.exports = routes
