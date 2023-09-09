const router = require("express").Router();
const commentController = require("../../controllers/commentController")

router.post('/addCmt',commentController.addComment)
router.get('/removeCmt',commentController.removeComment)

module.exports = router;
