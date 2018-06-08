// This file will create the User Schema with MongoDB.
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bookSchema = require('./book')

// Define Collection and Schema for User:
var UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: {type: String, required: true, unique: true},
  password: String,
  bookList:{
    toRead:[
      { type: Schema.Types.ObjectId, ref: 'bookSchema' }
    ],
    reading:[
      { type: Schema.Types.ObjectId, ref: 'bookSchema' }
    ],
    haveRead:[
      { type: Schema.Types.ObjectId, ref: 'bookSchema' }
    ]
  }
});

module.exports = mongoose.model('user',UserSchema);
