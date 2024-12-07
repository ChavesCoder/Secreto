var explicacaoModel = require("../models/explicacaoModel");


function explicacao(req, res) {
    // Captura o ID a partir dos parâmetros da URL
    var idPersonagens = req.params.idPersonagens;

    console.log(`Recebido ID: ${idPersonagens}`);

    explicacaoModel.explicacao(idPersonagens).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado[0]); // Retorna apenas o primeiro registro
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.error("Erro ao buscar os dados:", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    explicacao
}