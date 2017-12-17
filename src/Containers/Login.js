import React from 'react';
import LoginForm from '../Components/LoginForm'
import SignupForm from '../Components/SignupForm'
import {Jumbotron,Container,Button} from 'reactstrap';

const style={
  backgroundColor:'whitesmoke',
}

class Login extends React.Component{
  render(){
    return(
      <div>
        <Jumbotron fluid style={style} >
          <Container fluid>
            <h1 className="display-3">ReadGood</h1>
            <p className="lead">A MERN stack web app designed to help you read ... which is good.</p>
          </Container>
        </Jumbotron>
        <LoginForm />
        <div style={{textAlign:'center',padding:'15px'}}>
          TODO: Might need to move this ... somewhere
          <p>Dont have an account?</p>
          <Button outline color="secondary">Sign Up</Button>
        </div>
      </div>
    )
  }
}
export default Login
