'use strict'
const User_Endereco = use("App/Models/UserEndereco");
const { validateAll } = use("Validator");
class UserEnderecoController {
    async store({ request, response }) {

        const rules = {

            user_id: 'required',
            endereco_id: 'required',
        }
        const messages = {

            "user_id.required": 'O id do usuário deve ser informado',
            "endereco_id.required": ' O id do endereço deve ser informado',

        }
        const validate = await validateAll(request.all(), rules, messages);
        if (validate.fails()) {
            return response.status(401).send({ message: validate.messages() })
        }
        const data = request.only(['user_id', 'endereco_id']);
        const user_endereco = await User_Endereco.create(data);

        return user_endereco
    }
    async destroy({ params }) {
        const user_endereco = await User_Endereco.findOrFail(params.id);
        await user_endereco.delete();
        return {
            message: 'Excluido'
        }
    }
}

module.exports = UserEnderecoController
