// This api file will be for REACT, to interact with the backend API.
import axios from 'axios';

class bookService {
  sendData(data){
    // The Link should be like ... /+user/addbook ... Right?
    axios.post('https://localhost:4200/:email/update/book',{bookTitle: data["bookTitle"], bookAuthor: data["bookAuthor"],pagesRead: data["pagesRead"],pagesTotal: data["pagesTotal"],bookList: data["BookList"]}
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  updateData(data){
    // The Link here should be like ... /+user/updateBook
    axios.post('https://localhost:4200/:email/update/book',{bookTitle: data["bookTitle"], bookAuthor: data["bookAuthor"],pagesRead: data["pagesRead"],pagesTotal: data["pagesTotal"],bookList: data["BookList"]}
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  deleteData(data){
    // The Link here should be like ... /+user/deleteBook
    axios.post('https://localhost:4200/:email/delete/book',{bookTitle: data["bookTitle"], bookAuthor: data["bookAuthor"],pagesRead: data["pagesRead"],pagesTotal: data["pagesTotal"],bookList: data["BookList"]}
    )
  }
}

class signUpService{
  sendData(data){
    // The Link here should be: "/addUser". Something like that.
    console.log(data)
    axios.post('https://localhost:4200/signup',{firstName: data["firstName"],lastName:data["lastName"],email:data["email"],password:data["password"]})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }
}

class loginService{
  sendData(data){
    console.log(data)
    axios.post('https://localhost:4200/login',{email:data['email'],password:data['password']})
  .then(function(response){
    console.log(response);
    // TODO: Find a way to save token.
    // Perhaps I can send the token back, from the API to the front end. Make the front end hold onto it? ... That doesn't sound safe though.

  })
  .catch(function(error){
    console.log(error);
  })
  }
}

class authService{
  sendData(data){
    console.log(data)
  }
  .then(function(response){
    console.log(response);
  })
  .catch(function(error){
    console.log(error);
  })
}

export {
  bookService,
  signUpService,
  loginService,
  authService
}
