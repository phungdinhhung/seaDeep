const router = require("express").Router();
const userController = require("../../controllers/userController");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/profile", userController.profile);

module.exports = router;
