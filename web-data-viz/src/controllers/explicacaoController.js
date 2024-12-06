var explicacaoModel = require("../models/explicacaoModel");


function explicacao(req, res) {
    // Captura o ID a partir dos parâmetros da URL
    var idpersonagens = req.params.idpersonagens;

    console.log(`Recebido ID: ${idpersonagens}`);

    explicacaoModel.explicacao(idpersonagens).then(function (resultado) {
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