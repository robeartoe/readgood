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
var ObjectId = require('mongoose').Types.ObjectId;

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
      return res.json(user);
    }
  });
});

router.post('/add', passport.authenticate('jwt', { session: false}), function(req, res) {
  getToken(req.headers,function(user){
    if(!user){
      return res.status(403).send({success: false, msg: 'You can not be here.'});
    }
    else {
      var book = new Book({
        title: req.body.title, author: req.body.author,
        pagesRead: parseInt(req.body.pagesRead,10), pagesTotal: parseInt(req.body.pagesTotal,10),
        created: new Date(), updated: new Date(),
        currentList: req.body.currentList,
        userID: user._id
      });
      book.save()
      var currList = `bookList.${req.body.currentList}`;
        User.update(
          {_id: user._id},
          {$push : {
            [currList] : book
            }
          },
          {safe: true, upsert: true, new : true},
          function(err, model) {
            if(err){console.log(err)};
        });
        return res.status(200).send({success:true});
    }
  });
});

router.post('/update', passport.authenticate('jwt', { session: false}), function(req, res) {
  getToken(req.headers,function(user){
    if(!user){
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
    else {
      var userQuery = {_id:req.body.userID};
      var query = {_id: req.body._id};
      var updateObj = {
        title: req.body.title,
        author:req.body.author,
        pagesRead:req.body.pagesRead,
        pagesTotal:req.body.pagesTotal,
        currentList:req.body.currentList,
        updated: new Date()
      }

      Book.findByIdAndUpdate(query,updateObj,function(err,result){
        if(err){return res.status(500).send({success:false})}
        var oldList = `bookList.${result.currentList}`;
        var newList = `bookList.${updateObj.currentList}`;

        User.update(userQuery,{
          $pull:{ [oldList]: result._id }
          ,$push:{ [newList]: result }
        },{safe: true, new : true},function(err,result){});
      });
      return res.status(200).send({success:true});
    }
  });
});

router.post('/delete', passport.authenticate('jwt', { session: false}), function(req, res) {
  getToken(req.headers,function(user){
    if(!user){
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
    else {
      var query = {_id: req.body._id};
      Book.findByIdAndRemove(query,function(err,model){
        if(err){return res.status(500).send({success:false})}
        return res.status(200).send({success:true});
      });
    }
  });
});

function getToken (headers,cb) {
  if (headers && headers.authorization) {
    var authorization = headers.authorization.split(' '), decoded;
    if(authorization.length === 2){
        decoded = jwt.verify(authorization[1], settings);
        var userId = decoded._id;
        // Fetch the user by id
        User.findOne({_id: userId})
        .populate('bookList.toRead')
        .populate('bookList.reading')
        .populate('bookList.haveRead')
        .exec(function(err,results){
          if(err){
            return cb(null)}
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
      return res.status(500).send("Error on our end. We're sorry!");
    }
    if (!User) { return res.status(401).send("No User Found.")}
    User.comparePassword(req.body.password,function(err,valid){
      if(err){return console.log(err)}
      if(!valid){return res.status(401).send("Password is Incorrect.")}
      else {
        var token = jwt.sign(User.toJSON(), settings);
        // return the information including token as JSON
        res.json({success: true, token: 'JWT ' + token});
        }
    });
  });
});

router.post('/deleteAccount', passport.authenticate('jwt', { session: false}), function(req, res) {
  getToken(req.headers,function(user){
    if(!user){
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
    else {
      // console.log(user);
      // return res.json(user);
      query={_id:user._id};
      User.findByIdAndRemove(query,function(err,success){
        if(err){return res.status(500).send({success:false});}
        return res.status(200).send({success:true});
      });
    }
  });
});

module.exports = router;
