// This file will create the User Schema with MongoDB.
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bookSchema = require('./book')
var bcrypt = require('bcrypt-nodejs');

// Define Collection and Schema for User:
var UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: {type: String, required: true, unique: true},
  password: String,
  bookList:{
    toRead:[
      { type: Schema.Types.ObjectId, ref: 'book' }
    ],
    reading:[
      { type: Schema.Types.ObjectId, ref: 'book' }
    ],
    haveRead:[
      { type: Schema.Types.ObjectId, ref: 'book' }
    ]
  }
});

UserSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

var User = module.exports = mongoose.model('user',UserSchema);
