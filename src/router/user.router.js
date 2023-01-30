const express = require('express');
const { insertUser, getAllUser, getUserById } = require('../controller/user.controller');
const { userValidation } = require('../middleware/user.middleware');
const { tokenValidation } = require('../middleware/login.middleware');

const router = express.Router();

router.post('/user', userValidation, insertUser);
router.use('/user', tokenValidation);
router.get('/user', getAllUser);
router.get('/user/:id', getUserById);

module.exports = router;  