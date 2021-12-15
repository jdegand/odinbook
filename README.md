<h1 align="center">Odinbook</h1>

<div align="center">
   Solution for a challenge from  <a href="https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs/lessons/odin-book" target="_blank">theodinproject.com</a>.
</div>

## Table of Contents

- [Overview](#overview)
  - [Built With](#built-with)
  - [Thoughts](#thoughts)
- [Requirements](#requirements)
- [Improvements](#improvements)
- [Resources](#resources)

## Overview

The [exercise](https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs/lessons/odin-book) was to build a large portion of the core Facebook user functionality in this project. 

![](odinbook-homepage.png)
![](odinbook-wall-page.png)
![](odinbook-users-page.png)
![](odinbook-cant-see-other-users-requests.png)
![](odinbook-accepting-requests.png)
![](odinbook-rejecting-requests.png)

### Built With

- Express
- Bcrypt
- EJS
- Passport-Local

### Thoughts

- Passport documentation is terrible.  
- Creating a profile is just busywork.
- Multiple friend requests creates many complications.   

## Requirements

1. [x] Users must sign in to see anything except the sign in page.
2. [ ] Users should be able to sign in using their real facebook details. This is fairly easily accomplished using PassportJS, and you should be able to use the knowledge you already have to figure it out from the documentation.
3. [x] Users can send friend requests to other users.
4. [x] A user must accept the friend request to become friends.
5. [x] Users can create posts. (begin with text only)
6. [x] Users can like posts.
7. [x] Users can comment on posts.
8. [x] Posts should always display with the post content, author, comments and likes.
9. [ ] Treat the Posts index page like the real Facebook’s “Timeline” feature – show all the recent posts from the current user and users she is friends with.
10. [ ] Users can create Profile with a photo (you can get this from the real facebook when you sign in using passport)
11. [ ] The User Show page contains their profile information, profile photo and posts.
12. [ ] The Users Index page lists all users and buttons for sending friend requests to those who are not already friends or who don’t already have a pending request.
13. [ ] Deploy your app to Heroku!


## Improvements

- Passport in its own file
- LoggedIn / LoggedOut functions in its own file 
- Use Multer to add photo functionality
- Add additional fields to User model to create a profile
- Restricting likes to 1 per user.  
- Friend Request Overhaul.

## Resources

- [Stack Overflow](https://stackoverflow.com/questions/5404830/node-js-ejs-including-a-partial) - partials ejs
- [Stack Overflow](https://stackoverflow.com/questions/18816735/textarea-value-not-getting-posted-with-form) - textarea post
- [Stack Overflow](https://stackoverflow.com/questions/17546953/cant-access-object-property-even-though-it-shows-up-in-a-console-log) - access to object property
- [Stack Overflow](https://stackoverflow.com/questions/49121377/ejs-get-nested-object) - ejs nested object
- [Stack Overflow](https://stackoverflow.com/questions/12096262/how-to-protect-the-password-field-in-mongoose-mongodb-so-it-wont-return-in-a-qu) - password field & populate
- [Include Help](https://www.includehelp.com/node-js/ejs-with-express-routes.aspx) - ejs
- [Stack Overflow](https://stackoverflow.com/questions/26526779/mongoose-populate-not-working) - populate
- [Stack Overflow](https://stackoverflow.com/questions/50361444/save-multiple-model-documents-in-one-post-route-with-mongoose-express-node) - save multiple models in 1 route
- [Stack Overflow](https://stackoverflow.com/questions/57086046/mongoose-how-to-save-multiple-collections-in-single-route) - save multiple models in 1 route
- [Stack Overflow](https://stackoverflow.com/questions/11637353/comparing-mongoose-id-and-strings) - mongoose id comparisons
- [Stack Overflow](https://stackoverflow.com/questions/7306669/how-to-get-all-properties-values-of-a-javascript-object-without-knowing-the-key) - properties of js object
- [Stack Overflow](https://stackoverflow.com/questions/6237537/finding-matching-objects-in-an-array-of-objects) - arrays and objects
- [Stack Overflow](https://stackoverflow.com/questions/47827392/mongoose-findbyid-returns-null-even-with-valid-id) - findById()
- [Stack Overflow](https://stackoverflow.com/questions/20912283/passport-js-passing-user-req-user-to-template-implicitly) - * passport req-user 
- [Stack Overflow](https://stackoverflow.com/questions/5404830/node-js-ejs-including-a-partial) - ejs partials
- [Stack Overflow](https://stackoverflow.com/questions/62546995/define-passport-strategy-in-a-separate-file-and-use-it-across-the-app) - passport separate file
- [Stack Overflow](https://stackoverflow.com/questions/51957804/how-to-avoid-repeating-passport-js-code-used-in-multiple-express-js-routes) - * passport repetition
- [HeyNode](https://heynode.com/tutorial/authenticate-users-node-expressjs-and-passportjs/) - tutorial express and passport
- [Stack Overflow](https://stackoverflow.com/questions/29111571/passports-req-isauthenticated-always-returning-false-even-when-i-hardcode-done) - findOne issues