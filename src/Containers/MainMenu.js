import React from 'react';
import Layout from './Layout'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

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
              <h1 className="display-4">ReadGood</h1>
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
