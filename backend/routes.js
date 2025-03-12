const express = require("express");
const { signup, login } = require("./controllers/authController");
const { chat } = require("./controllers/chatController");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/chat", chat);

module.exports = router;
