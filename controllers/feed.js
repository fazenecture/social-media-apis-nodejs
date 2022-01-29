exports.getPosts = (req,res,next) =>{

    res.status(200).json({
        title : "Hello Peopel wa",
        content: "Aur bhai kya chalr ha ?"
    });

};

exports.createPost = (req,res,next) => {

    const title = req.body.title;
    const content = req.body.content;

    res.json({
        message: "Post Create Succesfully",
        post: {
            postId : new Date().toISOString(),
            title: title,
            content: content,
        }
    })

}