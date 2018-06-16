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
var Book = require('../models/book');

var Bcrypt = require('bcrypt');
var moment = require('moment');
var jwt = require('jsonwebtoken');

router.get('/', passport.authenticate('jwt', { session: false}), function(req, res) {
  getToken(req.headers,function(user){
    if(!user){
      console.log("Unauthorized")
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
    else {
      // console.log(user);
      return res.json(user);
    }
  });
});

router.post('/addbook', passport.authenticate('jwt', { session: false}), function(req, res) {
  getToken(req.headers,function(user){
    // console.log(user)
    if(!user){
      return res.status(403).send({success: false, msg: 'You can not be here.'});
    }
    else {
      // console.log(typeof(user));
      var book = new Book({
        title: req.body.title, author: req.body.author,
        pagesRead: parseInt(req.body.pagesRead,10), pagesTotal: parseInt(req.body.pagesTotal,10),
        created: new Date(), updated: new Date(),
        currentList: req.body.currentList,
        userID: user._id
      });
      // console.log(book)
      book.save()

      if(req.body.currentList === 'toRead'){
        // console.log("In toREAD")
        User.update(
          {_id: user._id},
          {$push : {
            "bookList.toRead" : book
            }
          },
          {safe: true, upsert: true, new : true},
          function(err, model) {
            if(err){console.log(err)};
        });
        // User.save()
        return res.status(200).send({success:true});
      }
      if(req.body.currentList === 'reading'){
        User.update(
          {_id: user._id},
          {$push : {
            "bookList.reading" : book
            }
          },
          {safe: true, upsert: true, new : true},
          function(err, model) {
            if(err){console.log(err)};
        });
        // User.save()
        return res.status(200).send({success:true});
      }
      if(req.body.currentList === 'haveRead'){
        User.update(
          {_id: user._id},
          {$push : {
            "bookList.haveRead" : book
            }
          },
          {safe: true, upsert: true, new : true},
          function(err, model) {
            if(err){console.log(err)};
        });
        // User.save()
        return res.status(200).send({success:true});
      }
    }
  });
});

// router.post('/update', passport.authenticate('jwt', { session: false}), function(req, res) {
//   getToken(req.headers,function(user){
//     if(!user){
//       return res.status(403).send({success: false, msg: 'Unauthorized.'});
//     }
//     else {
//       // console.log(user);
          // var new
//       return res.status(200).send(success:true);
//     }
//   });
// });

// router.post('/delete', passport.authenticate('jwt', { session: false}), function(req, res) {
//   getToken(req.headers,function(user){
//     if(!user){
//       return res.status(403).send({success: false, msg: 'Unauthorized.'});
//     }
//     else {
//       // console.log(user);
//       return res.json(user);
//     }
//   });
// });

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
        .populate('bookList.toRead')
        .populate('bookList.reading')
        .populate('bookList.haveRead')
        .exec(function(err,results){
          if(err){
            console.log(err)
            return cb(null)}
          // console.log(results)
          cb(results)
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

// router.post('/deleteAccount', passport.authenticate('jwt', { session: false}), function(req, res) {
//   getToken(req.headers,function(user){
//     if(!user){
//       return res.status(403).send({success: false, msg: 'Unauthorized.'});
//     }
//     else {
//       // console.log(user);
//       return res.json(user);
//     }
//   });
// });

module.exports = router;
