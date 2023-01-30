const express = require('express');
const categoryController = require('../controller/category.controller');

const { tokenValidation } = require('../middleware/login.middleware');
const categoryMiddleware = require('../middleware/category.middleware');

const router = express.Router();

router.post('/categories', tokenValidation, categoryMiddleware.categoryValidation, 
categoryController.insertCategory);

module.exports = router;