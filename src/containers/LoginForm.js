import React from 'react'
import { Container ,Col, Form, FormGroup, Label, Input, Button,Alert } from 'reactstrap';
import {Link} from 'react-router-dom';
import MainMenu from './MainMenu';
import axios from 'axios';

const style={
  backgroundColor:"white",
  padding:"10px"
}

class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {email:'',password:'',errorState:false,errors:[],successState:false};
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
    var errorList = [];
    var state = true;
    if (this.state.password === '') {
      errorList.push("Empty password!");
      state = false;
    }
    if (this.state.email === '') {
      errorList.push("Empty Email!")
      state = false;
    }
    this.setState({errors:errorList})
    return state;
  }

  handleSubmit(event){
    event.preventDefault();
    var data = {
      email:this.state.email,
      password:this.state.password
    }
    if (this.handleFormValidation()) {
      var self = this;
      self.setState({errorState:false});
      axios.post('http://localhost:4200/api/login',data)
      .then(function(result){
        // If API code is 200: Good, it worked.
        // console.log(result);
        localStorage.setItem('jwtToken', result.data.token);
        self.setState({successState:true});
        self.props.history.push('/');
      })
     .catch(function(error){
       // Else: Something went wrong.
       console.log(error)
       if (error.response) {
         console.log(error.response)
         var errorList = [error.response.data];
         self.setState({errorState:true});
         self.setState({errors:errorList});
       }
       else if (error.request) {
         console.log(error.request)
         var errorList = [error.request.data];
         self.setState({errorState:true});
         self.setState({errors:errorList});
       }
     });
    }
    else{
      this.setState({errorState:true});
    }
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
            Sign in Successful!
          </Alert>
          :
          null
        }
        <Container style={style}>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label for="Email" sm={2}>Email</Label>
               <Col sm={10}>
                 <Input type="email" name="email" id="exampleEmail" placeholder="JohnDoe@AOL.com" onChange={this.handleChange} value={this.state.email} />
               </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="Password" sm={2}>Password</Label>
                <Col sm={10}>
                  <Input type="password" name="password" suggested="current-password" placeholder="Doe1234" onChange={this.handleChange} value={this.state.password}/>
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
