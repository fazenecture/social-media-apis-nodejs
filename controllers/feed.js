const { validationResult } = require('express-validator/check');
const Post = require('../models/post');



exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: '1',
        title: "Hello Phela Phela Post",
        content: "Aur bhai kya chalr ha ?",
        imageUrl: "images/dashimage.png",
        creator : {
            name: "Rnapdm"
        },
        createdAt: new Date()
      },
    ],
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
