var database = require("../database/config");

function verificarExistencia(idDevocional, idUsuario) {
    var instrucaoSql = `
        SELECT * FROM Registro
        WHERE fkUsuario = ${idUsuario} AND fkDevocional = ${idDevocional};
    `;
    return database.executar(instrucaoSql);
}

function atualizar(idDevocional, idUsuario) {
    var instrucaoSql = `
        INSERT INTO Registro (lido, fkUsuario, fkDevocional)
        VALUES (1, ${idUsuario}, ${idDevocional});
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    verificarExistencia,
    atualizar,
};

