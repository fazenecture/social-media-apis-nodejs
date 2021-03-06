const express = require("express");
const { body } = require("express-validator/check");
const feedController = require("../controllers/feed");
const router = express.Router();

router.get("/posts", feedController.getPosts);
router.post("/createPost",
  [
    body('title').trim().isLength({ min: 5 }),
    body('content').trim().isLength({ min: 5 }),
  ],
  feedController.createPost
);

router.get('/post/:postId', feedController.getPost);

router.put('/post/:postId')


module.exports = router;
