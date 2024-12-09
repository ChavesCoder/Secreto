var database = require("../database/config");

function totalLido
    (idUsuario) {

    var instrucaoSql = `SELECT COUNT(*) AS totalLidos FROM Registro WHERE fkUsuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function DiasConta
    (idUsuario) {

    var instrucaoSql = `SELECT DATEDIFF(CURDATE(), dtCadastro) AS DiasConta FROM usuario WHERE idUsuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function ultimomes
    (idUsuario) {

    var instrucaoSql = ` SELECT COUNT(*) AS totalMes FROM Registro WHERE fkUsuario = ${idUsuario} AND MONTH(data_leitura) = MONTH(CURDATE()) AND YEAR(data_leitura) = YEAR(CURDATE());`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function consecutivos
    (idUsuario) {

    var instrucaoSql = `WITH CTE AS (
    SELECT 
        MIN(data_leitura) AS data_leitura, -- Pega a menor data do dia agrupado
        ROW_NUMBER() OVER (ORDER BY MIN(data_leitura) DESC) AS row_num
    FROM Registro
    WHERE fkUsuario = ${idUsuario} AND lido = 1
    GROUP BY DATE(data_leitura) -- Agrupa pelas datas sem hora
)
SELECT COUNT(*) AS dias_consecutivos
FROM CTE
WHERE DATEDIFF(CURDATE(), data_leitura) = row_num - 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    totalLido,
    DiasConta,
    ultimomes,
    consecutivos

};