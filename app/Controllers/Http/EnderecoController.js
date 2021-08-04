'use strict'
const Endereco = use("App/Models/Endereco");

const { validateAll } = use("Validator");
class EnderecoController {

    async store({ request, response }) {

        const rules = {

            logradouro: 'required',
            numero: 'required',
            bairro: 'required',
            cidade: 'required',
            estado: 'required',
        }
        const messages = {

            "logradouro.required": 'O logradouro deve ser informado',
            "numero.required": ' O numero deve ser informado',
            "bairro.required": "O bairro deve ser informado",
            "cidade.required": "A cidade deve ser informado",
            "estado.required": "O estado deve ser informado",

        }
        const validate = await validateAll(request.all(), rules, messages);
        if (validate.fails()) {
            return response.status(401).send({ message: validate.messages() })
        }
        const data = request.only(['logradouro', 'numero', 'bairro', 'cidade', 'estado']);
        const endereco = await Endereco.create(data);

        return endereco

    }
    async destroy({ params }) {
        const endereco = await Endereco.findOrFail(params.id);
        await endereco.delete();
        return {
            message: 'Excluido'
        }
    }
}

module.exports = EnderecoController
