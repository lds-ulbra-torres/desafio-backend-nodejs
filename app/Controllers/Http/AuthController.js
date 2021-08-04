"use strict";


const User = use("App/Models/User");
const { validateAll } = use("Validator");
const Database = use('Database')


class AuthController {

  async store({ request, response }) {

    const rules = {
      nome: 'required',
      email: 'required',
      telefone: 'required',
    }
    const messages = {
      "nome.required": 'O nome deve ser informado',
      "email.required": ' O email deve ser informado',
      "telefone.required": "O telefone deve ser informado",

    }
    const validate = await validateAll(request.all(), rules, messages);
    if (validate.fails()) {
      return response.status(401).send({ message: validate.messages() })
    }
    const data = request.only(['nome', 'email', 'telefone']);
    const user = await User.create(data);
    return user;


  }


  async show({ params }) {
    const user = await User.findOrFail(params.id);
    return user;
  }

  async index({ request }) {
    const user = await User.query()
      .with("enderecos")
      .fetch();
    return user;
  }
  async filter({ request }) {
    const user_nome = request.only('nome');
    const user_email = request.only('email');

    if (user_nome.nome == null) {
      const users_e = await User.query().with("enderecos").where('email', 'LIKE', '%' + user_email.email + '%').fetch()

      return users_e


    } else if (user_email.email == undefined) {
      const users_n = await User.query().with("enderecos").where('nome', 'LIKE', '%' + user_nome.nome + '%').fetch()
      return users_n
    }
  }


  async update({ params, request }) {
    const user = await User.findOrFail(params.id);
    const dataToUpdate = request.only(['nome', 'email', 'telefone']);
    user.merge(dataToUpdate);
    await user.save();
    return user;
  }
  async destroy({ params }) {
    const user = await User.findOrFail(params.id);
    await user.delete();
    return {
      message: 'Usuário Excluido'
    }
  }
}
module.exports = AuthController;
