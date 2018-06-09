// This Routes file will be for node and express.
var express = require('express');
// var app = express(); //Perhaps I don't need this?
var router = express.Router();

var User = require('../models/user');
var Bcrypt = require('bcrypt');
var moment = require('moment');
var jwt = require('jwt-simple');

router.route('/').get(function(req,res){
  res.json({test:"HI I see you're trying to get into the API. Can I help you? Email: robert@robertjruiz.com"})
});

// Will be called upon SignUp.
router.route('/register').post(function(req,res){
  var item = new User(req.body);
  Bcrypt.hash(req.body.password,10,function(err,hash){
    item.password = hash;
    item.save()
    .then(item => {
      return res.send("User Added Sucessfully");
    })
    .catch(err => {
      return res.status(400).send(err);
    })
  })
});

// TODO: Implement Login with bCrypt.
router.route('/login').post(function(req,res){
  // console.log(req.body);
  User.findOne({email:req.body.email},function (err,User){
    // console.log(User);
    if(err){
      console.log(err);
      return res.status(500).send("Error on our end. We're sorry!");
    }
    if (!User) { return res.status(401).send("No User Found.")}
    Bcrypt.compare(req.body.password,User.password,function(err,valid){
      if(err){return console.log(err)}
      if(!valid){return res.status(401).send("Password is Incorrect.")}
      else {
        // TODO: Implement JWT Here:
        var expires = moment().add(7,'hours').valueOf();
        var token = jwt.encode({
          iss: User.email,
          exp: expires
        },"TestSecretKEY")
        console.log(token)

        // res.json({ //Do I need this?
        //   token:token,
        //   expires:expires,
        //   user: user.toJSON() //Do I need this?
        // });
        res.status(200).json(token);
      }
    });
  });
});

// TODO: Implement Authenticate:
// router.route('/authenticate').post(function(req,res){
//   userModel.findOne({email:req.params.email},function (err,user){
//     if(err){
//       console.log(err);
        //Move User Back to Login Screen:

//     }
//     else {
        // If Authenticated:
//       res.json(user);
        // Else NOT Authenticated:
          // Move user to Login screen.
//     }
//   })
// });

// NOTE: Implement Logout? This will make their token invalid? Hmm.

// This route will get the user AND their books and their list.
router.route('/:email').get(function(req,res){
  User.findOne({email:req.params.email},function (err,user){
    if(err){
      console.log(err);
    }
    if(!user){return(res.status(401).send("User is not fonud...?"))}
    else {
      res.json(user);
    }
  })
});

router.route('/:email/update/user').post(function(req,res){
  userModel.findOne({email:req.params.email},function(err,item){
    if (!item)
      return next(new Error('Could not load Document'));
    else{
      // TODO: Implement updating user.
      // This function wil update: firstName,lastName,email,password
      item.firstName = req.params.firstName;
      item.lastName = req.params.lastName;
      item.email = req.params.email;
      // If the user imputs a new password: This password would have to be encrypted as well:

    }
  });
});

router.route('/:email/update/book').post(function(req,res){
  userModel.findOne({email:req.params.email},function(err,item){
    if (!item)
      return next(new Error('Could not load Document'));
    else{
      // TODO: Implement adding of books, based on list.
    }
  });
});

// Will not fully implement this UNTIL I implement the settings page.
router.route('/:email/delete/user').post(function(req,res){
  userModel.findOneAndRemove({email:req.params.email},function(err,user){
    if(err){
      console.log(err);
    }
    else{
      console.log("User Deleted Succesfully.");
    }
  });
});

// https://stackoverflow.com/questions/39043649/remove-a-document-nested-in-an-array-via-mongoose
// This will help with nested links for DELETE books.
router.route('/:email/delete/book').post(function(req,res){
  // TODO: Implement deleting book based on list.
  // userModel.findOneAndRemove({bookList[req.params.bookList][ /*In Here should be the index of the book, that's supposed to get deleted.*/  ]})
});

module.exports = router;
