const express = require('express');
const router = express.Router();
const User = require('../models/User');
const FriendRequest = require('../models/FriendRequest');
const mongoose = require('mongoose');

function isLoggedIn(req,res,next){
  if(req.isAuthenticated()) return next();
  res.redirect('/');
}

router.get('/', isLoggedIn, (req, res, next) => {
  User.find({}, function(err, users) {
    if(err) {
      console.error(err);
    } else {
      res.render('users', { users: users });
    }
  });
});

router.get("/:userId", isLoggedIn,function(req, res, next) { 
  User.findById(req.params.userId).populate('requests').exec(function(err, user){
    if(err) console.error(err);

    res.render('user', {userId: user});
  })
});

router.post('/:userId', isLoggedIn, async (req, res, next) => {
  try {
    if(req.params.userId === req.user.id) { //have to check if users are already friends
      res.redirect('/users');
    } else {
      const friend = new FriendRequest({
        user: req.user.id,
        self: req.params.userId,
        status: req.body.status
      });
  
      await friend.save();

    await User.findById(req.params.userId, function(err, user) {
      if(err) {
          console.error(err);
      }
        user.requests.unshift(friend);

        user.save().then((err)=> {
          if(err) console.error(err);

          res.redirect('/wall');
          })
        })
    }
  } catch (err) {
    console.error(err);
  }
})

router.post("/:userId/update", isLoggedIn, async function(req, res, next) { 
  await User.findById(req.params.userId).populate('requests').exec(function(err, user){ 
    if(err) console.error(err);

    const friendRequestId = user.requests[0]._id; // this is a problem have to match this or limit requests to 1 at a time

    /*
    for(var i=0; i<user.requests.length; i++) {
      console.log("Position: " + i + ", Value: " + user.requests[i].user);
    }
    */
    
    FriendRequest.findById(friendRequestId).exec(async function (err, friend){
      if(err) console.error(err);
    
      friend.status = req.body.status;

      await friend.save();

      //to send back user's actual name - have to do another request to db and pass it as variable to template
      res.redirect(`/users/${req.params.userId}`);
    })     
  })
});

module.exports = router;