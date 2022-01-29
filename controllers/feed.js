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
        return res.status(422).json({message: "Validation error", error: errors.array});
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
  }).catch(err => console.log(err));


};
