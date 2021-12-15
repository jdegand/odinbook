const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const passport = require('passport');

// put into own file and then require when needed
/* function isLoggedIn(req,res,next){
  if(req.isAuthenticated()) return next();
  res.redirect('/wall');
}
*/

function isLoggedOut(req,res,next){
  if(!req.isAuthenticated()) return next();
  res.redirect('/');
}

// home page
router.get('/', (req, res) => {
  res.render('index', {title: 'Odinbook', user: req.user });
});

router.get("/sign-up", isLoggedOut, (req, res) => res.render("sign-up"));

router.get("/log-out", (req, res) => {
  req.logout();
  res.redirect("/");
});

router.post("/sign-up", isLoggedOut, (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
      const user = new User({
          username: req.body.username,
          password: hashedPassword
        }).save(err => {
          if (err) { 
            return next(err);
          }
          res.redirect("/");
        });
    });
});

router.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/wall",
    failureRedirect: "/"
  })
);

module.exports = router;