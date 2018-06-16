//This Container allows the user to add a book to any of their list.
import React from 'react';
import Layout from './Layout'
import {Link} from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/fontawesome-free-solid'
import {Container,Row,Col,Button,Form,FormGroup,Label,Input,Alert,UncontrolledAlert} from 'reactstrap'
import axios from 'axios';

const style={
  paddingBottom:"50px",
}

class AddBook extends React.Component{
  constructor(props){
    super(props);
    this.state = {title:'',author:'',pagesRead:0,pagesTotal:0,list:'reading',errorState:false,errorMsg:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeValue = this.changeValue.bind(this);
  }

  handleChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({[name]: value});
  }

  handleFormValidation(){
    var state = true;
    if (this.state.title == '') {
      this.setState({errorMsg:"Can't have an empty book name!"})
      return state = false;
    }
    return state;
  }

  changeValue(e) {
    // console.log(e.target.value)
    this.setState({list: e.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    var data = {
      title:this.state.title,
      author:this.state.author,
      pagesRead:this.state.pagesRead,
      pagesTotal:this.state.pagesTotal,
      currentList:this.state.list,
      service:"add"
    }
    // console.log(this.state)
    if (this.handleFormValidation()) {
      var self = this;
      self.setState({errorState:false});
      axios.post('http://localhost:4200/api/addbook',data)
      .then(function(result){
        // If API code is 200: Good, it worked.
        console.log(result);
        // self.setState({successState:true});
        self.props.history.push('/');
      })
     .catch(function(error){
       // Else: Something went wrong.
       console.log(error)
       if (error.response) {
         console.log(error.response)
         // var errorList = [error.response.data];
         self.setState({errorState:true});
         self.setState({errorMsg:error.response.data});
       }
       else if (error.request) {
         console.log(error.request)
         // var errorList = [error.request.data];
         self.setState({errorState:true});
         self.setState({errorMsg:error.request.data});
       }
     });
    }
    else{
      this.setState({errorState:true});
    }
  }

  render(){
    return(
      <Layout>
        <Container style={style}>
          <Row>
            <Col sm={{size:3,offset:1}}>
              <h1 class="display-4">Add Book:</h1>
            </Col>
          </Row>
          <Row>
            <Col xs="1">
              <span><Link to="/"><FontAwesomeIcon style={{color:"#60be86"}} icon={faArrowLeft} size="2x"/></Link></span>
            </Col>
            <Col>
              {
                this.state.errorState ?
                <UncontrolledAlert color="danger">
                  Error in form!
                <span style={{display:"block"}}>{ this.state.errorMsg } </span>
                </UncontrolledAlert>
                :
                null
              }
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label for="bookTitle">Title</Label>
                  <Input name="title" id="bookTitle" onChange={this.handleChange} value={this.state.title} placeholder="Invisible Man"/>
                </FormGroup>
                <FormGroup>
                  <Label for="bookAuthor">Author</Label>
                  <Input name="author" id="bookAuthor" onChange={this.handleChange} value={this.state.author} placeholder="Ralph Ellison"/>
                </FormGroup>
                <FormGroup>
                  <Label for="pagesRead">Pages Read</Label>
                  <Input name="pagesRead" id="pagesRead" onChange={this.handleChange} value={this.state.pagesRead} placeholder="25"/>
                </FormGroup>
                <FormGroup>
                  <Label for="pagesTotal">Pages Total</Label>
                  <Input name="pagesTotal" id="pagesTotal" onChange={this.handleChange} value={this.state.pagesTotal} placeholder="460"/>
                </FormGroup>
                <FormGroup>
                  <Label for="bookList">Book List</Label>
                  <Input type="select" name="list" id="bookList" value={this.state.list} onChange={this.changeValue}>
                    <option value="reading" >Reading</option>
                    <option value="toRead">To Read</option>
                    <option value="haveRead">Have Read</option>
                  </Input>
                </FormGroup>
                <Button style={{backgroundColor:"#60be86"}}>Add Book</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }

}

export default AddBook;
