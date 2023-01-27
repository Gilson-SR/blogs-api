const express = require('express');
const loginController = require('../controller/login.controller');
const userController = require('../controller/user.controller');
const loginMiddleware = require('../middleware/login.middleware');

const router = express.Router();

router.post('/login', loginMiddleware.loginValidation, loginController.createToken);
router.post('/user', userController.create);

module.exports = router;