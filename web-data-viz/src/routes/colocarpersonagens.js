var express = require("express");
var router = express.Router();

var ColocarPersonagemController = require("../controllers/ColocarPersonagemController");

// router.post("/cadastrar", function (req, res) {
//     // função a ser chamada quando acessar /devocionals/cadastrar
//     devocionalController.cadastrar(req, res);
// });

// router.get("/listar", function (req, res) {
//     // função a ser chamada quando acessar /devocionals/listar
//     devocionalController.listar(req, res);
// });
router.get("/ColocarPersonagens", function (req, res) {
    ColocarPersonagemController.ColocarPersonagens(req, res);
})

module.exports = router;