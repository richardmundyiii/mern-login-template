const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/users");
const ensureLoggedIn = require("../config/ensureLoggedIn");

router.post("/", userCtrl.create);

router.post("/login", userCtrl.login);

router.get("/check-token", ensureLoggedIn, userCtrl.checkToken);

module.exports = router;
