import axios from 'axios';
class signupService{
  sendData(data){
    // The Link here should be: "/addUser". Something like that.
    console.log(data)
    axios.post('https://localhost:4200/api/signup',{firstName: data["firstName"],lastName:data["lastName"],email:data["email"],password:data["password"]})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }
}

export default signupService
