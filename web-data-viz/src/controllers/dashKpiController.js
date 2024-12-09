var devocionalModel = require("../models/dashKpiModel");


function totalLido(req, res) {
    var idUsuario = req.params.idUsuario;

    devocionalModel.totalLido(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar o total lido.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function DiasConta(req, res) {
    var idUsuario = req.params.idUsuario;

    devocionalModel.DiasConta(idUsuario).then(function (resultado) {
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
function ultimomes(req, res) {
    var idUsuario = req.params.idUsuario;

    devocionalModel.ultimomes(idUsuario).then(function (resultado) {
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
function consecutivos(req, res) {
    var idUsuario = req.params.idUsuario;

    devocionalModel.consecutivos(idUsuario).then(function (resultado) {
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
    totalLido,
    DiasConta,
    ultimomes,
    consecutivos
}