const express = require('express');
const userController = require('../controller/user.controller');
const userValidation = require('../middleware/user.middleware');
const tokenValidation = require('../middleware/login.middleware');

const router = express.Router();

router.post('/user', userValidation, userController.insertUser);
router.get('/user', tokenValidation, userController.getAllUser);

module.exports = router;