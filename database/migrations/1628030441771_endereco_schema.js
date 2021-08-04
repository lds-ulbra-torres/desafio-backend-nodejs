'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EnderecoSchema extends Schema {
  up () {
    this.create('enderecos', (table) => {
      table.increments()
      table.string('logradouro', 254).notNullable()
      table.integer('numero').notNullable()
      table.string('bairro', 60).notNullable()
      table.string('cidade', 50).notNullable()
      table.string('estado', 10).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('enderecos')
  }
}

module.exports = EnderecoSchema
