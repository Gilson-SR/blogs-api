const express = require('express');
const categoryController = require('../controller/category.controller');

const loginMiddleware = require('../middleware/login.middleware');
const categoryMiddleware = require('../middleware/category.middleware');

const router = express.Router();

router.post('/categories', loginMiddleware.tokenValidation, categoryMiddleware.categoryValidation, 
categoryController.insertCategory);
router.get('/categories', loginMiddleware.tokenValidation, categoryController.getAllCategories);

module.exports = router;