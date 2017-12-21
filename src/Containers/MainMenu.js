import React from 'react';
import Layout from './Layout'
import LoginForm from '../Components/LoginForm'
import SignupForm from '../Components/SignupForm'
import {Jumbotron,Container,Button} from 'reactstrap';

const style={
  backgroundColor:'whitesmoke',
}

class MainMenu extends React.Component{
  render(){
    return(
      <Layout>
        <div>
          <Jumbotron fluid style={style} >
            <Container fluid>
              <h1 className="display-3">ReadGood</h1>
              <p className="lead">A MERN stack web app designed to help you read ... which is good.</p>
            </Container>
          </Jumbotron>
          {this.props.children}
        </div>
      </Layout>
    )
  }
}
export default MainMenu;
