
// function listar(req, res) {
//     devocionalModel.listar().then(function(resultado){
//         // precisamos informar que o resultado voltará para o front-end como uma resposta em json
//         res.status(200).json(resultado);
//     }).catch(function(erro){
//         res.status(500).json(erro.sqlMessage);
//     })
// }

// function cadastrar(req, res) {
//     var nome = req.body.nome;

//     if (nome == undefined) {
//         res.status(400).send("Seu nome está undefined!");
//     }

//     devocionalModel.cadastrar(nome).then(function(resposta){
//         res.status(200).send("devocional criado com sucesso");
//     }).catch(function(erro){
//         res.status(500).json(erro.sqlMessage);
//     })
// }

var personagemModel = require("../models/personagemModel");


function conhecer(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idpersonagens = req.body.idpersonagensServer;

    // var fkEmpresa = req.body.idEmpresaVincularServer;

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        personagemModel.conhecer(idpersonagens)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a atualizacao! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }


module.exports = {
    conhecer
}