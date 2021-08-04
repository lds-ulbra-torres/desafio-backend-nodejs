'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserEnderecoSchema extends Schema {
  up () {
    this.create('user_enderecos', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users').notNull()
      table.integer('endereco_id').unsigned().references('id').inTable('enderecos').notNull()
      table.timestamps()
    })
  }

  down () {
    this.drop('user_enderecos')
  }
}

module.exports = UserEnderecoSchema
