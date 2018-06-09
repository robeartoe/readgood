import React from 'react'
import { Container ,Col, Form, FormGroup, Label, Input, FormText,Card,
  CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button,Alert } from 'reactstrap';
import MainMenu from './MainMenu';
import {Link} from 'react-router-dom';
import axios from 'axios';

const style={
  padding:'15px',
  backgroundColor:'white'
}

class SignupForm extends React.Component{
  constructor(props) {
     super(props);
     this.state = {firstName: '',lastName:'',email:'',password:'',confirmPassword:'',errorState:false,successState:false,errors:[]};
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    // console.log(target);
    // console.log(value);
    // console.log(name);
    // console.log(this.state);
    this.setState({[name]: value});
   }

   handleFormValidation(){
     var state = true;
     // console.log(this.state);
     var errorList = [];

     if(this.state.password != this.state.confirmPassword){
       errorList.push("Passwords do not match!");
       state = false;
     }
     if (this.state.password.length == 0) {
       errorList.push("No password!")
       state = false;
     }
     if (this.state.firstName == '') {
       errorList.push("No First Name!")
       state = false;
     }
     if (this.state.lastName == '') {
       errorList.push("No Last Name!");
       state = false;
     }
     if (this.state.email == '') {
       errorList.push("No Email!");
       state = false;
     }
     this.setState({errors:errorList})
     return state;
   }

   handleSubmit(event) {
     var data = {
       firstName: this.state.firstName,
       lastName: this.state.lastName,
       email: this.state.email,
       password: this.state.password
     }
    if (this.handleFormValidation()) {
      this.setState({errorState:false});
      var self = this;
      axios.post('http://localhost:4200/api/register',data)
      .then(function(result){
        // If API code is 200: Good, it worked.
        // console.log(result.data);
        // console.log(result.status);
        self.setState({successState:true});
      })
     .catch(function(error){
       // Else: Something went wrong.
       console.log(error)
       var errorList = [error];
       self.setState({errorState:true});
       self.setState({errors:errorList});
      });
    }
    else{
      this.setState({errorState:true});
      // console.log(this.state)
    }
    event.preventDefault();
   }

  render(){
    return(
      <MainMenu>
      {
        this.state.errorState ?
        <Alert color="danger">
          Error in form!
        <span style={{display:"block"}}>{ this.state.errors.join(' ') } </span>
        </Alert>
        :
        null
      }
      {
        this.state.successState ?
        <Alert color="success">
          SignUp Successful!
        </Alert>
        :
        null
      }
      <Container style={style}>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup row>
            <Label for="FirstName" sm={2}>First Name</Label>
            <Col sm={10}>
              <Input valid={this.state.inputClass} name="firstName" id="firstName" placeholder="John" value={this.state.firstName} autoComplete='given-name' onChange={this.handleChange}/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="LastName" sm={2}>Last Name</Label>
            <Col sm={10}>
              <Input valid={this.state.inputClass} name="lastName" id="lastName" placeholder="Doe" value={this.state.lastName} autoComplete='family-name' onChange={this.handleChange}/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Email" sm={2}>Email</Label>
           <Col sm={10}>
             <Input className={this.state.inputClass} type="email" name="email" id="exampleEmail" value={this.state.email} autoComplete='email' onChange={this.handleChange} placeholder="JohnDoe@AOL.com" />
           </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Password" sm={2}>Password</Label>
            <Col sm={10}>
              <Input className={this.state.inputClass} type="password" onChange={this.handleChange} placeholder="OhDoe1234" name="password"  value={this.state.password}/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Password" sm={2}>Confirm Password</Label>
            <Col sm={10}>
              <Input className={this.state.inputClass} type="password" onChange={this.handleChange} placeholder="OhDoe1234" name="confirmPassword"  value={this.state.confirmPassword}/>
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button outline>Sign Up</Button>
            </Col>
          </FormGroup>
        </Form>

      </Container>
      <div style={{textAlign:'center',padding:'15px',backgroundColor:'#60be86'}}>
        <p>Have an account?</p>
        <Link to="/Login"><Button style={{backgroundColor:"whitesmoke",color:'#60be86'}}>Log In</Button></Link>
      </div>
      </MainMenu>
    )
  }
}

export default SignupForm;
