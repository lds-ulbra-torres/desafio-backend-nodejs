"use strict";

const Route = use("Route");

//Rota para adicionar um usuário
Route.post("users", "AuthController.store")
//Rota para listar todos os usuarios
Route.get("users", 'AuthController.index')
//Rota para filtrar por nome ou email
Route.post("filtrar", 'AuthController.filter')
//Rota para editar o usuario
Route.put("users/:id", 'AuthController.update')
//Rota para deletar um usuário
Route.delete("users/:id", 'AuthController.destroy')
//Rota para adicionar o endereco
Route.post("endereco", "EnderecoController.store")
//Rota para adicionar o id do usuário e o id do endereco
Route.post("user_endereco", "UserEnderecoController.store")
//Rota para deletar um endereco
Route.delete("endereco/:id", 'EnderecoController.destroy')
//Rota para deletar um user_endereco
Route.delete("user_endereco/:id", 'UserEnderecoController.destroy')













