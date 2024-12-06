var express = require("express");
var router = express.Router();

var personagemController = require("../controllers/personagemController");

// router.post("/cadastrar", function (req, res) {
//     // função a ser chamada quando acessar /personagems/cadastrar
//     personagemController.cadastrar(req, res);
// });

// router.get("/listar", function (req, res) {
//     // função a ser chamada quando acessar /personagems/listar
//     personagemController.listar(req, res);
// });
router.get("/personagens/conhecer/:idpersonagens", function (req, res) {
    personagemController.personagemAtual(req, res);
})

module.exports = router;