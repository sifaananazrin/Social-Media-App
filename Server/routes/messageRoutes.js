const express = require('express');
const router = express();
const { verify } = require("../middleware/userVerification");

const {
    sendMessage,
    allMessages
} = require('../controllers/MessageController');

router.post('/',verify,sendMessage);
router.get('/:chatId',verify,allMessages);


module.exports = router;