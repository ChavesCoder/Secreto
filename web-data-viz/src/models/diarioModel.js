var database = require("../database/config");

function verificarExistencia(idDevocional, idUsuario) {
    var instrucaoSql = `
        SELECT * FROM diario
        WHERE Usuario_idUsuario = ${idUsuario} AND Devocional_idDevocional = ${idDevocional};
    `;
    return database.executar(instrucaoSql);
}

function atualizar(idDevocional, idUsuario) {
    var instrucaoSql = `
        INSERT INTO diario (lido, Usuario_idUsuario, Devocional_idDevocional)
        VALUES (1, ${idUsuario}, ${idDevocional});
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    verificarExistencia,
    atualizar,
};

