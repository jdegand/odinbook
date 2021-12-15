const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const Comment = require('../models/Comment');

function isLoggedIn(req,res,next){
  if(req.isAuthenticated()) return next();
  res.redirect('/');
}

router.get("/", isLoggedIn, (req, res) => {
   Post.find({}).populate('author').populate('comments').exec(function(err, posts) {
        if(err) {
        console.error(err);
        } else {
          res.render('wall', { posts: posts });
        }
  });
});

router.get('/:postId', isLoggedIn, (req, res, next) => {

  Post.findById(req.params.postId).populate('author').populate('comments').exec(function(err, post) {
    if(err) {console.error(err)}

    res.render('post', { post: post })
  })
})

router.post('/', isLoggedIn, (req, res, next) => {
  const post = new Post({
    author: req.user._id,
    body: req.body.body
  });
  
    post.save(function(err, user) {
      if(err) console.log(err);
      return res.redirect('/wall');
    });
})

router.post('/:postId/comments', isLoggedIn, (req, res, next) => {
  Post.findById(req.params.postId, function(err, post) {
    if(err) { console.error(err) };

      let comment = new Comment({
        content: req.body.content,
        likes: req.body.likes,
        postId: req.params.id
      });

      post.comments.unshift(comment);

      post.save(function(err, post) {
        if(err) { console.error(err) };

        comment.save(function(err, comment) {
          if(err) { console.error(err) };

          return res.redirect(`/wall`);
        });
      });
  });
});

router.post('/:postId/update', isLoggedIn, (req, res, next) => {
  Post.findById(req.params.postId, function(err, post) {

    post.likes += 1;

    post.save(function(err, post) {
      if(err) { console.error(err) };
      return res.redirect('/wall');
    });
  });
});

router.post('/:postId/delete', isLoggedIn, (req, res, next) => {
  Post.findByIdAndDelete(req.params.postId, function(err, post) {
    if(err) console.log(err)
    res.redirect('/wall');
  });
});

module.exports = router;