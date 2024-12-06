const express = require("express");
const router = express.Router();

const { signUp,login } = require("../controller");
const { jwtMiddleware, generateToken, isAdmin } = require("../authentication");

router.route("/admin").post(isAdmin);

router.route("/signup")
.post(signUp);
router.route("/login").
post(login);

module.exports = router;
