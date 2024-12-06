var express = require("express");
var router = express.Router();

var diarioController = require("../controllers/diarioController");

router.post("/atualizar/:idDevocional", function (req, res) {
    diarioController.atualizar(req, res);
});



module.exports = router;