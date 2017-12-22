import React from 'react'
import { Container ,Col, Form, FormGroup, Label, Input, FormText,Card,
  CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button } from 'reactstrap';
import MainMenu from './MainMenu';
// import signUpService from '../api'
import {Link} from 'react-router-dom';
import {signUpService} from '../api'

const style={
}

class SignupForm extends React.Component{
  constructor(props) {
     super(props);
     this.state = {firstName: '',lastName:'',email:'',password:'',confirmPassword:''};

     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
     this.setState({[name]: value});
   }

   handleSubmit(event) {
     alert(this.state.firstName + this.state.lastName + this.state.email);
     var data = {
       firstName: this.state.firstName,
       lastName: this.state.lastName,
       email: this.state.email,
       password: this.state.password,
       confirmPassword: this.state.password
     }
     // TODO: Determine if two password fields are exact: Else throw error.
     // TODO: Post Request to API: Add User onto DB.

     event.preventDefault();
   }

  render(){
    return(
      <MainMenu>
      <div>
        <Card>
          <CardBody>
            <CardTitle>Sign Up</CardTitle>
            <CardText>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                  <Label for="FirstName" sm={2}>First Name</Label>
                  <Col sm={10}>
                    <Input name="firstName" id="firstName" placeholder="John" value={this.state.firstName} onChange={this.handleChange}/>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="LastName" sm={2}>Last Name</Label>
                  <Col sm={10}>
                    <Input name="lastName" id="lastName" placeholder="Doe" value={this.state.lastName} onChange={this.handleChange}/>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="Email" sm={2}>Email</Label>
                 <Col sm={10}>
                   <Input type="email" name="email" id="exampleEmail" value={this.state.email} onChange={this.handleChange} placeholder="JohnDoe@AOL.com" />
                 </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="Password" sm={2}>Password</Label>
                  <Col sm={10}>
                    <Input type="password" onChange={this.handleChange} placeholder="OhDoe1234" name="password" value={this.state.password}/>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="Password" sm={2}>Confirm Password</Label>
                  <Col sm={10}>
                    <Input type="password" onChange={this.handleChange} placeholder="OhDoe1234" name="confirmPassword" value={this.state.confirmPassword}/>
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
          <Link to="/Login"><Button style={{backgroundColor:"#60be86"}}>Log In</Button></Link>
        </div>
      </div>
      </MainMenu>
    )
  }
}

export default SignupForm;
