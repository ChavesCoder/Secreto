var database = require("../database/config");

// function listar() {
//     var instrucao = `
//         SELECT * FROM devocional;
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }
// function cadastrar(nome) {
//     var instrucao = `
//         INSERT INTO devocional (nome) VALUES ('${nome}');
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }
function explicacao(idpersonagens) {
    var instrucaoSql = `SELECT * FROM personagens WHERE idpersonagens = ${idpersonagens}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    // cadastrar,
    // listar
    explicacao
};