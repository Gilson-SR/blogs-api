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

router.get(
  '/post/:id',
  loginMiddleware.tokenValidation,
  postController.getPostById,
);

router.put(
  '/post/:id',
  loginMiddleware.tokenValidation,
  postMiddleware.updateValidation,
  postController.postUpdate,
);

module.exports = router;
