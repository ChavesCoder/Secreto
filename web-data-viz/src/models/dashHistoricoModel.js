var database = require("../database/config");

function temaDevocional(idUsuario) {
    var instrucaoSql = `SELECT SUM(CASE WHEN d.tag = 'amor' THEN 1 ELSE 0 END) AS amor,
 SUM(CASE WHEN d.tag = 'alegria' THEN 1 ELSE 0 END) AS alegria,
 SUM(CASE WHEN d.tag = 'sabedoria' THEN 1 ELSE 0 END) AS sabedoria,
 SUM(CASE WHEN d.tag = 'esperança' THEN 1 ELSE 0 END) AS esperanca,
 SUM(CASE WHEN d.tag = 'força' THEN 1 ELSE 0 END) AS forca 
 FROM Registro r JOIN Devocional d ON r.fkDevocional = d.idDevocional WHERE fkUsuario = ${idUsuario} AND r.lido = 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function ultimos7dias(idUsuario) {

    var instrucaoSql = `SELECT COUNT(*) AS totalSemana FROM Registro WHERE fkUsuario = ${idUsuario} AND data_leitura >= CURDATE() - INTERVAL 7 DAY;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function ultimos3meses
    (idUsuario) {

    var instrucaoSql = ` SELECT MONTH(data_leitura) AS mes, COUNT(*) AS total 
FROM Registro 
WHERE fkUsuario = ${idUsuario} 
  AND data_leitura >= CURDATE() - INTERVAL 3 MONTH 
GROUP BY MONTH(data_leitura)
ORDER BY MIN(data_leitura);`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    temaDevocional,
    ultimos7dias,
    ultimos3meses,
};