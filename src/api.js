// This api file will be for REACT, to interact with the backend API.
import axios from 'axios';

class bookService {
  sendData(data){
    // The Link should be like ... /+user/addbook ... Right?
    axios.post('https://localhost:4200/Book/Add/',{bookTitle: data["bookTitle"], bookAuthor: data["bookAuthor"],pagesRead: data["pagesRead"],pagesTotal: data["pagesTotal"],bookList: data["BookList"]}
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
  }
  deleteData(data){
    // The Link here should be like ... /+user/deleteBook

  }
}

class signUpService{
  sendData(data){
    // The Link here should be: "/addUser". Something like that.
    console.log(data)

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
  .then(function(response){
    console.log(response);
  })
  .catch(function(error){
    console.log(error);
  })
  }
}

export {
  bookService,
  signUpService,
  loginService
}
