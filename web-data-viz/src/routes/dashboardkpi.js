var express = require("express");
var router = express.Router();

var dashHistoricoController = require("../controllers/dashKpiController");

router.get(`/totalLido/:idUsuario`, function (req, res) {
    dashHistoricoController.totalLido(req, res);
})
router.get(`/DiasConta/:idUsuario`, function (req, res) {
    dashHistoricoController.DiasConta(req, res);
})
router.get(`/ultimomes/:idUsuario`, function (req, res) {
    dashHistoricoController.ultimomes(req, res);
})
router.get(`/consecutivos/:idUsuario`, function (req, res) {
    dashHistoricoController.consecutivos(req, res);
})
module.exports = router;