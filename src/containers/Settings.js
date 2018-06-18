import React from 'react';
import Layout from './Layout';
import {Alert,Container,Jumbotron,Row,Col,Button,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';

const style={
  justifyContent:"center",
  display: "block",
  margin: "0 auto"
}
class Settings extends React.Component{
  constructor(props) {
   super(props);
   this.state = {
     user: {},
     errorState:false,errors:[],successState:false,modal:false
   };
  this.onConfirm = this.onConfirm.bind(this);
  this.toggle = this.toggle.bind(this);
 }

 toggle(){
    this.setState({modal: !this.state.modal});
  }

  onConfirm(event){
    var self = this;
    axios.post('http://localhost:4200/api/deleteAccount')
    .then(function(result){
      // If API code is 200: Good, it worked.
      self.props.history.push('/');
    })
   .catch(function(error){
     // Else: Something went wrong.
     console.log(error)
     if (error.response) {
       var errorList = [error.response.data];
       self.setState({errorState:true});
       self.setState({errors:errorList});
     }
     else if (error.request) {
       var errorList = [error.request.data];
       self.setState({errorState:true});
       self.setState({errors:errorList});
     }
   });
  }
  componentDidMount(){
    // console.log(localStorage.getItem('jwtToken'));
     axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
     var self = this;
     axios.get('http://localhost:4200/api/') //This will get the user, their books, everything.
       .then((results)=>{
         console.log(results)
         self.setState({user:results.data});
       })
       .catch((error) => {
         console.log(error);
         console.log(error.response)
         if(error.response.status === 401) {
               self.props.history.push("/login");
         }
       });
  }

  render(){
    return(
      <Layout>
        <Container>
          <Jumbotron>
            <h1 className="display-5">Settings</h1>
          </Jumbotron>
          <Row>
            <Col>
              {
                this.state.errorState ?
                <Alert color="danger">
                  Error in form!
                <span style={{display:"block"}}>{ this.state.errors.join(' ') } </span>
                </Alert>
                :
                null
              }
              <h4>Delete Account: </h4>
              <p>This will completely delete your account. Please be sure you want to delete your account, because there is no going back.</p>
            </Col>
            <Col>
            <Button onClick={this.toggle} style={style} color="danger">DELETE</Button>
            </Col>
          </Row>
        </Container>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Confirm Delete</ModalHeader>
          <ModalBody>
            There is no going back. Are you sure you want to delete?
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.onConfirm}>Do it. Delete my Account!</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </Layout>
    )
  }
}

export default Settings;
