// This Routes file will be for node and express.
var dotenv = require('dotenv');
// There's no need to check if .env exists, dotenv will check this // for you. It will show a small warning which can be disabled when // using this in production.
dotenv.load();

var express = require('express');
// var app = express(); //Perhaps I don't need this?
var router = express.Router();
var passport = require('passport');
var settings = process.env.secret; // get secret var.
require('../utils/passport')(passport);
var User = require('../models/user');
var Bcrypt = require('bcrypt');
var moment = require('moment');
var jwt = require('jsonwebtoken');

router.get('/', passport.authenticate('jwt', { session: false}), function(req, res) {
  getToken(req.headers,function(user){
    if(!user){
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
    else {
      // console.log(user);
      return res.json(user);
    }
  });
});

function getToken (headers,cb) {
  if (headers && headers.authorization) {
    var authorization = headers.authorization.split(' '), decoded;
    // console.log(authorization)
    if(authorization.length === 2){
        decoded = jwt.verify(authorization[1], settings);
        // console.log(decoded);
        var userId = decoded._id;
        // console.log(userId);
        // Fetch the user by id
        User.findOne({_id: userId})
        .catch(function(error){
          return cb(null);
        })
        .then(function(user){
            // Do something with the user
            // console.log(user);
            cb(user);
        })
    }
  }
};

// Will be called upon SignUp.
router.route('/register').post(function(req,res){
  var item = new User(req.body);
  Bcrypt.hash(req.body.password,10,function(err,hash){
    item.password = hash;
    console.log(hash)
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
  User.findOne({email:req.body.email},function (err,User){
    if(err){
      console.log(err);
      return res.status(500).send("Error on our end. We're sorry!");
    }
    if (!User) { return res.status(401).send("No User Found.")}
    // console.log(req.body.password);
    // console.log(User.password);
    User.comparePassword(req.body.password,function(err,valid){
      if(err){return console.log(err)}
      // console.log(valid)
      if(!valid){return res.status(401).send("Password is Incorrect.")}
      else {
        var token = jwt.sign(User.toJSON(), settings);
        // return the information including token as JSON
        res.json({success: true, token: 'JWT ' + token});
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
