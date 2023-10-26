const express = require('express');
const router = express.Router();
const UserController = require('../controllers/AuthController');
const upload = require('../config.js/multerConfig'); 
router.post('/register', upload.single('photo'), UserController.register);
router.post('/login', UserController.login);
router.get('/', UserController.getAllUser);
module.exports = router;
