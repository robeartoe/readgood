// This Routes file will be for node and express.
var express = require('express');
var app = express();
var router = express.Router();

var user = require('./models');
var Bcrypt = require('bcrypt');
var moment = require('moment');
var jwt = require('jwt-simple');

router.route('/').get(function(req,res){
  res.json({test:"TEST"})
});

// Will be called upon SignUp.
router.route('/register').post(function(req,res){
  var item = new user(req.body);
  bcrypt.hash(req.body.password,10,function(err,hash){
    item.password = hash;
    console.log(item.password)
    item.save()
    .then(item => {
      res.json("User Added Sucessfully");
    })
    .catch(err => {
      res.status(400).send(err);
    })
  })
});

// TODO: Implement Login with bCrypt.
router.route('/login').post(function(req,res){
  user.findOne({email:req.body.email},function (err,User){
    // console.log(User)
    if(err){console.log(err);}
    if (!User) { return res.status(401).send("No User Found?")}
    Bcrypt.compare(req.body.password,User.password,function(err,valid){
      if(err){return console.log(err)}
      if(!valid){return res.status(401).send()}
      else {
        // TODO: Implement JWT Here:
        var expires = moment().add(7,'hours').valueOf();
        var token = jwt.encode({
          iss: User.email,
          exp: expires
        },"Horse")
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
//     }
//     else {
//       res.json(user);
//     }
//   })
// });

// NOTE: Implement Logout? ...

// This route will get the user AND their books and their list.
router.route('/:email').get(function(req,res){
  userModel.findOne({email:req.params.email},function (err,user){
    if(err){
      console.log(err);
    }
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
});

module.exports = router;
