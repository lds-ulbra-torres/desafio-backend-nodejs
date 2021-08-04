'use strict'

const Env = use('Env')
const Helpers = use('Helpers')

module.exports = {

  connection: Env.get('DB_CONNECTION', 'mysql'),
  mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('DB_HOST', 'localhost'),
      port: Env.get('DB_PORT', ''),
      user: Env.get('DB_USER', 'root'),
      password: Env.get('', ''),
      database: Env.get('desafio-backend-nodejs','desafio-backend-nodejs')
    },
    debug: Env.get('DB_DEBUG', false)
  }
}
