'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up() {
    this.create('users', (table) => {
      table.increments()
      table.string('nome', 80).notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('telefone', 15).notNullable()
      
      table.timestamps()
    })
  }

  down() {
    this.drop('users')
  }
}

module.exports = UserSchema
