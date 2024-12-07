var express = require("express");
var router = express.Router();

var explicacaoController = require("../controllers/explicacaoController");

// router.post("/cadastrar", function (req, res) {
//     // função a ser chamada quando acessar /explicacaos/cadastrar
//     explicacaoController.cadastrar(req, res);
// });

// router.get("/listar", function (req, res) {
//     // função a ser chamada quando acessar /explicacaos/listar
//     explicacaoController.listar(req, res);
// });
router.get("/explicacao/:idPersonagens", function (req, res) {
    explicacaoController.explicacao(req, res);
})

module.exports = router;