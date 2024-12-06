var express = require("express");
var router = express.Router();

var devocionalController = require("../controllers/devocionalController");

// router.post("/cadastrar", function (req, res) {
//     // função a ser chamada quando acessar /devocionals/cadastrar
//     devocionalController.cadastrar(req, res);
// });

// router.get("/listar", function (req, res) {
//     // função a ser chamada quando acessar /devocionals/listar
//     devocionalController.listar(req, res);
// });
router.get("/DevocionalHoje", function (req, res) {
    devocionalController.DevocionalHoje(req, res);
})

module.exports = router;