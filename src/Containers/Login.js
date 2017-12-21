import React from 'react';
import Home from './Home'
import LoginForm from '../Components/LoginForm'
import SignupForm from '../Components/SignupForm'
import {Jumbotron,Container,Button} from 'reactstrap';

const style={
  backgroundColor:'whitesmoke',
}

class Login extends React.Component{
  render(){
    return(
      <Home>
        <div>
          <Jumbotron fluid style={style} >
            <Container fluid>
              <h1 className="display-3">ReadGood</h1>
              <p className="lead">A MERN stack web app designed to help you read ... which is good.</p>
            </Container>
          </Jumbotron>
          <LoginForm />
        </div>
      </Home>
    )
  }
}
export default Login;
