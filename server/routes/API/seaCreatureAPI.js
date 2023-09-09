const router = require("express").Router();
const seaCreatureController = require("../../controllers/seaCreatureController");

router.get('/showAll', seaCreatureController.showAllSC);
router.post('/upload', seaCreatureController.uploadSC)
router.get('/remove', seaCreatureController.removeSC)
module.exports = router;
