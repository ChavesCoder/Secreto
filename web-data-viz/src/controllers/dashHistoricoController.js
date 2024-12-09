var devocionalModel = require("../models/dashHistoricoModel");

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

function ultimos7dias(req, res) {
    var idUsuario = req.params.idUsuario;

    devocionalModel.ultimos7dias(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as o registro dos 7 dias do historico.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function temaDevocional(req, res) {
    var idUsuario = req.params.idUsuario;

    devocionalModel.temaDevocional(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar o tema devocioanal.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function ultimos3meses(req, res) {
    var idUsuario = req.params.idUsuario;

    devocionalModel.ultimos3meses(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as o registro dos 3 meses do historico.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    ultimos7dias,
    temaDevocional,
    ultimos3meses,
}