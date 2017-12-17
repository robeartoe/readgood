import React from 'react'
import { Container ,Col, Form, FormGroup, Label, Input, FormText,Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const style={

}

class SignupForm extends React.Component{
  render(){
    return(
      <div>
        <Card>
          <CardBody>
            <CardTitle>Sign Up</CardTitle>
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
                <FormGroup row>
                  <Label for="Password" sm={2}>Confirm Password</Label>
                  <Col sm={10}>
                    <Input type="password" placeholder="Doe1234"/>
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
      </div>
    )
  }
}

export default SignupForm;
