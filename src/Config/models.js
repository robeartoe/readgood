// This file will create the User Schema with MongoDB.
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define Collection and Schema for User:
var UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: {type: String, required: true, unique: true},
  password: String,
  bookList:{
    toRead:{
      book:{
        bookTitle: String,
        bookAuthor: String,
        pagesRead: Number,
        pagesTotal: Number
      }
    },
    reading:{
      book:{
        bookTitle: String,
        bookAuthor: String,
        pagesRead: Number,
        pagesTotal: Number
      }
    },
    haveRead:{
      book:{
        bookTitle: String,
        bookAuthor: String,
        pagesRead: Number,
        pagesTotal: Number
      }
    }
  }
});

module.export = mongoose.model('User',UserSchema);
