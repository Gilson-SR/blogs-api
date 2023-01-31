const express = require('express');

const loginMiddleware = require('../middleware/login.middleware');
const postMiddleware = require('../middleware/post.middleware');
const postController = require('../controller/post.controller');

const router = express.Router();

router.get('/post', loginMiddleware.tokenValidation, postController.getAllPost);

router.post(
  '/post',
  loginMiddleware.tokenValidation,
  postMiddleware.postValidation,
  postController.insertPost,
);

module.exports = router;
