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
  currentList: String
});

module.exports = mongoose.model('book',bookSchema);
