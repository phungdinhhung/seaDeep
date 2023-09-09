const router = require("express").Router();
const suggestionController = require('../../controllers/suggestionController')

router.get('/getAll', suggestionController.getAllSugg)
router.post('/postSugg', suggestionController.postSugg)
module.exports = router;
