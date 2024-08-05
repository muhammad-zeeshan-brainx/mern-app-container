const router = require('express').Router();
const { postController } = require('../controllers');

router.get('/', postController.getPosts);

module.exports = router;
