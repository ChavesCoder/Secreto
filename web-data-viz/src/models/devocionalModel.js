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
function DevocionalHoje() {

    var instrucaoSql = `SELECT * FROM Devocional WHERE DATE(Data_publicacao) = CURDATE();`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    // cadastrar,
    // listar
    DevocionalHoje
};