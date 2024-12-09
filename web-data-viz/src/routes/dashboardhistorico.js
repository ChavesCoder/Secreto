var express = require("express");
var router = express.Router();

var dashHistoricoController = require("../controllers/dashHistoricoController");

// router.post("/cadastrar", function (req, res) {
//     // função a ser chamada quando acessar /devocionals/cadastrar
//     devocionalController.cadastrar(req, res);
// });

// router.get("/listar", function (req, res) {
//     // função a ser chamada quando acessar /devocionals/listar
//     devocionalController.listar(req, res);
// });
router.get(`/ultimos7dias/:idUsuario`, function (req, res) {
    dashHistoricoController.ultimos7dias(req, res);
})
router.get(`/temaDevocional/:idUsuario`, function (req, res) {
    dashHistoricoController.temaDevocional(req, res);
})
router.get(`/ultimos3meses/:idUsuario`, function (req, res) {
    dashHistoricoController.ultimos3meses(req, res);
})

module.exports = router;