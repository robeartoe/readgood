import axios from 'axios';

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

export default loginService;
