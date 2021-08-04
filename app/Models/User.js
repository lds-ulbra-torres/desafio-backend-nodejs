'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class User extends Model {
  enderecos() {
    return this.belongsToMany("App/Models/Endereco").pivotTable(
      'user_enderecos',
    );
  }

}

module.exports = User
