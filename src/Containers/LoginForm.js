import React from 'react'
import { Container ,Col, Form, FormGroup, Label, Input, FormText,Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import MainMenu from './MainMenu';
import loginService from '../api/loginService'
const Buttonstyle={
  backgroundColor:"#60be86",
}

class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {email:'',password:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value});
  }

  // TODO: Implement loginError:
  // This function will show a red bar, if the login failed and for what reason.
  loginError(){

  }

  handleSubmit(event){
    var data = {
      email:this.state.email,
      password:this.state.password
    }

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
        <div>
          <Card>
            <CardBody>
              <CardTitle>Login</CardTitle>
              <CardText>
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
                      <Input type="password" placeholder="Doe1234"/>
                    </Col>
                  </FormGroup>
                  <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                      <Button outline>Login</Button>
                    </Col>
                  </FormGroup>
                </Form>
              </CardText>
            </CardBody>
          </Card>
          <div style={{textAlign:'center',padding:'15px'}}>
            <p>Dont have an account?</p>
            <Link to="/Signup"><Button style={Buttonstyle}>Sign Up</Button></Link>
          </div>
        </div>
      </MainMenu>
    )
  }
}

export default LoginForm;
