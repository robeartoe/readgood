import React from 'react'
import { Container ,Col, Form, FormGroup, Label, Input, FormText,Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,Alert } from 'reactstrap';
import {Link} from 'react-router-dom';
import MainMenu from './MainMenu';
import loginService from '../api/loginService'
import axios from 'axios';

const style={
  backgroundColor:"white",
  padding:"10px"
}

class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {email:'',password:'',errorState:false,error:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value});
  }

  handleFormValidation(){
    var errorList = '';

    this.setState({errors:errorList})
    // return errorList;
  }

  handleSubmit(event){
    var data = {
      email:this.state.email,
      password:this.state.password
    }
    var self = this;
    axios.post('http://localhost:4200/api/register',data)
    .then(function(result){
      // If API code is 200: Good, it worked.
      console.log(result.data);
      console.log(result.status);
      // self.setState({successState:true});
    })
   .catch(function(error){
     // Else: Something went wrong.
     console.log(error)
     var errorList = [error];
     self.setState({errorState:true});
     self.setState({errors:errorList});
    });

    event.preventDefault();

    // TODO: Implement call to API.
    // Perform API Request:
    // login = loginService(data); //NOTE: This may not work. Not sure how JS initializes classes.

    // // If Password is incorrect OR User is not in the DB. Let them know:
    // if (){
    // }
    // else if (){
    // }
    // // Else Log the user in:
    // else{
    // }

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
        <Container style={style}>
            <Form>
              <FormGroup row>
                <Label for="Email" sm={2}>Email</Label>
               <Col sm={10}>
                 <Input type="email" name="email" id="exampleEmail" placeholder="JohnDoe@AOL.com" />
               </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="Password" sm={2}>Password</Label>
                <Col sm={10}>
                  <Input type="password" suggested="current-password" placeholder="Doe1234"/>
                </Col>
              </FormGroup>
              <FormGroup check row>
                <Col sm={{ size: 10, offset: 2 }}>
                  <Button outline>Login</Button>
                </Col>
              </FormGroup>
            </Form>
        </Container>
        <div style={{textAlign:'center',padding:'15px',backgroundColor:'#60be86'}}>
          <p>Dont have an account?</p>
          <Link to="/Signup"><Button style={{backgroundColor:"whitesmoke",color:'#60be86'}}>Sign Up</Button></Link>
        </div>
      </MainMenu>
    )
  }
}

export default LoginForm;
