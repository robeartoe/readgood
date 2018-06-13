// Should have this class.
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

export default bookService;
