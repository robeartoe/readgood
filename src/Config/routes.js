// This Routes file will be for node and express.
var express = require('express');
var app = express();
var router = express.Router();

var userModel = require("./models")

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

// Will be called upon SignUp.
router.route('/add/user').post(function(req,res){
  var item = new userModel(req.body);
    item.save()
    .then(item => {
      res.json("User Added Sucessfully");
    })
    .catch(err => {
      res.status(400).send("Error in adding new user: ");
    })
});

//When I'm adding a book, or updating user details, I'm essentially just updating the current UserSchema.
router.route('/update').post(function(req,res){

});

// These two however, should be the same.

// Will not implement this UNTIL I implement the settings page.
router.route('/delete/user').post(function(req,res){

});

router.route('/delete/book').post(function(req,res){

});

module.exports = router;
