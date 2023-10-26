const express = require("express");
const router = express();
const { verify } = require("../middleware/userVerification");

const { accessChat, fetchChats } = require("../controllers/ChatController");

router.post("/chat", verify, accessChat);
router.get("/chat", verify, fetchChats);

module.exports = router;
