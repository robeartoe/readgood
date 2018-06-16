// This file will create the User Schema with MongoDB.
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define Collection and Schema for User:
var bookSchema = new Schema({
  title:  String,
  author: String,
  pagesRead: Number,
  pagesTotal: Number,
  created: Date,
  updated: Date,
  currentList: String,
  userID: { type: Schema.Types.ObjectId, ref: 'UserSchema' }
});

var Book = module.exports = mongoose.model('book',bookSchema);
