var ColocarPersonagemModel = require("../models/ColocarPersonagemModel");

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

function ColocarPersonagens(req, res) {
    ColocarPersonagemModel.ColocarPersonagens().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas devocionals.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    ColocarPersonagens
}