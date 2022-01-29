const { validationResult } = require('express-validator/check')
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
  
  res.json({
    message: "Post Create Succesfully",
    post: {
      _id : new Date().toISOString(),
      title: title,
      content: content,
      creator : {
        name: "Rnapdm"
    },
    createdAt: new Date()
    },
  });
};
