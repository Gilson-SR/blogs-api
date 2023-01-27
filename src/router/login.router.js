const express = require('express');
const loginController = require('../controller/login.controller');
const loginMiddleware = require('../middleware/login.middleware');

const router = express.Router();

router.post('/login', loginMiddleware.loginValidation, loginController.createToken);

module.exports = router;