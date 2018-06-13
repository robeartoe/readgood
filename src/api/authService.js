import axios from 'axios';

class authService{
  sendData(data){
    console.log(data)
  .then(function(response){
    console.log(response);
  }).catch(function(error){
    console.log(error);
  })
  }
}
export default authService;

//NOTE: Determine if I need this class or not.
