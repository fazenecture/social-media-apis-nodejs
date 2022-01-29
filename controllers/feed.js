const { validationResult } = require('express-validator/check');
const post = require('../models/post');
const Post = require('../models/post');



exports.getPosts = (req, res, next) => {
  Post.find().then(posts => {
      res.status(200).json({message: 'Posts Fected', posts:posts});
  }).catch(err => {
    console.log(err);
    if(!err.statusCode) {
        err.statusCode = 500;
    }
    next(err);
  });
};

exports.createPost = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const error = new Error('Validation error');
        error.statusCode = 422;
        throw error;
    }
  const title = req.body.title;
  const content = req.body.content;
  const post = new Post({
    title: title,
    content: content,
    imageUrl: 'images/dashimage.png',
    creator : {
      name: "Rnapdm"
  },
  });

  post.save().then(result => {
      console.log(result);
      res.json({
        message: "Post Create Succesfully",
        post: result,
      });
  }).catch(err => {
      if(!err.statusCode) {
          err.statusCode = 500;
      }
      next(err);
  });


};

exports.getPost = (req, res, next) => {
    const postId = req.params.postId;
    Post.findById(postId).then(post =>{
    if (!post) {
        const err = new Error('Post Not Found');
        err.statusCode = 404;
        throw err;
    }
    res.status(200).json({message: 'Post fectched', post: post});

    }).catch(err => {
        console.log(err);
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    })
};
