import React from 'react';
import Layout from './Layout';
import {Container,Jumbotron,Row,Col,Button} from 'reactstrap';
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
     user: {}
   };
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
              <h4>Delete Account: </h4>
              <p>This will completely delete your account. Please be sure you want to delete your account, because there is no going back.</p>
            </Col>
            <Col>
            <Button style={style} color="danger">DELETE</Button>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default Settings;
