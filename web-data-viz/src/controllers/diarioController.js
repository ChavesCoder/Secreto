var diarioModel = require("../models/diarioModel");

function atualizar(req, res) {
    var idDevocional = req.params.idDevocional; // ID do devocional vindo da rota
    var idUsuario = req.body.idUsuarioServer;  // ID do usuário vindo do corpo da requisição

    // Validações iniciais
    if (!idDevocional || !idUsuario) {
        res.status(400).send("ID do Devocional ou ID do Usuário não fornecido!");
        return;
    }

    // Verifica se já existe o registro
    diarioModel.verificarExistencia(idDevocional, idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                // Registro já existe
                res.status(400).send("Este devocional já foi marcado como lido por este usuário.");
            } else {
                // Insere o registro no banco de dados
                return diarioModel.atualizar(idDevocional, idUsuario)
                    .then(function (resultadoAtualizar) {
                        // Aqui é onde usamos o resultado do INSERT
                        res.status(200).json({
                            mensagem: "Devocional marcado como lido com sucesso!",
                            detalhes: resultadoAtualizar, // Informação extra se necessário
                        });
                    });
            }
        })
        .catch(function (erro) {
            console.log("Erro ao verificar ou atualizar diário:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}


module.exports = {
    atualizar
};
