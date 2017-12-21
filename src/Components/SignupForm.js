import React from 'react'
import { Container ,Col, Form, FormGroup, Label, Input, FormText,Card,
  CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button } from 'reactstrap';
import MainMenu from '../Containers/MainMenu';
import {Link} from 'react-router-dom';
const style={

}

class SignupForm extends React.Component{
  render(){
    return(
      <MainMenu>
      <div>
        <Card>
          <CardBody>
            <CardTitle>Sign Up</CardTitle>
            <CardText>
              <Form>
                <FormGroup row>
                  <Label for="FirstName" sm={2}>First Name</Label>
                  <Col sm={10}>
                    <Input name="firstName" id="firstName" placeholder="John" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="LastName" sm={2}>Last Name</Label>
                  <Col sm={10}>
                    <Input name="lastName" id="lastName" placeholder="Doe"/>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="Email" sm={2}>Email</Label>
                 <Col sm={10}>
                   <Input type="email" name="email" id="exampleEmail" placeholder="JohnDoe@AOL.com" />
                 </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="Password" sm={2}>Password</Label>
                  <Col sm={10}>
                    <Input type="password" placeholder="OhDoe1234"/>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="Password" sm={2}>Confirm Password</Label>
                  <Col sm={10}>
                    <Input type="password" placeholder="OhDoe1234"/>
                  </Col>
                </FormGroup>
                <FormGroup check row>
                  <Col sm={{ size: 10, offset: 2 }}>
                    <Button outline>Sign Up</Button>
                  </Col>
                </FormGroup>
              </Form>
            </CardText>
          </CardBody>
        </Card>
        <div style={{textAlign:'center',padding:'15px'}}>
          <p>Have an account?</p>
          <Link to="/"><Button style={{backgroundColor:"#60be86"}}>Log In</Button></Link>
        </div>
      </div>
      </MainMenu>
    )
  }
}

export default SignupForm;
