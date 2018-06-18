//This Container allows the user to Edit, Move and Delete a book.
import React from 'react';
import Layout from './Layout'
import {Link} from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/fontawesome-free-solid'
import {Container,Row,Col,Button,Form,FormGroup,Label,Input,UncontrolledAlert} from 'reactstrap'
import axios from 'axios';

const style={
  paddingBottom:"50px",
}

class EditBook extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      book:{
        title:'',author:'',
        pagesRead:0,pagesTotal:0,
        currentList:'reading'
      },
      errorState:false,
      errorMsg:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  componentDidMount(){
    this.setState({book:this.props.location.state.book})
  }

  handleChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    let book = Object.assign({}, this.state.book);
    book[name] = value;

    this.setState({book});
  }

  changeValue(e) {
    // Will change ToRead, reading and haveRead:
    let book = Object.assign({}, this.state.book);
    const name = e.target.name;
    book[name] = e.target.value;
    this.setState({book});
  }

  onDelete(){
    var self = this;
    axios.post('http://localhost:4200/api/delete',this.state.book)
    .then(function(result){
      // If API code is 200: Good, it worked.
      self.props.history.push('/');
    })
   .catch(function(error){
     // Else: Something went wrong.
     if (error.response) {
       self.setState({errorState:true});
       self.setState({errorMsg:error.response.data});
     }
     else if (error.request) {
       self.setState({errorState:true});
       self.setState({errorMsg:error.request.data});
     }
   });
  }

  handleFormValidation(){
    var state = true;
    if (this.state.book.title === '') {
      this.setState({errorMsg:"Can't have an empty book name!"})
      return state = false;
    }
    return state;
  }



  handleSubmit(event){
    event.preventDefault();
    if (this.handleFormValidation()) {
      var self = this;
      self.setState({errorState:false});
      axios.post('http://localhost:4200/api/update',this.state.book)
      .then(function(result){
        // If API code is 200: Good, it worked.
        self.props.history.push('/');
      })
     .catch(function(error){
       // Else: Something went wrong.
       if (error.response) {
         self.setState({errorState:true});
         self.setState({errorMsg:error.response.data});
       }
       else if (error.request) {
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
              <h1 class="display-4">Edit Book:</h1>
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
                  <Input name="title" id="bookTitle" onChange={this.handleChange} value={this.state.book.title} placeholder="Invisible Man"/>
                </FormGroup>
                <FormGroup>
                  <Label for="bookAuthor">Author</Label>
                  <Input name="author" id="bookAuthor" onChange={this.handleChange} value={this.state.book.author} placeholder="Ralph Ellison"/>
                </FormGroup>
                <FormGroup>
                  <Label for="pagesRead">Pages Read</Label>
                  <Input name="pagesRead" id="pagesRead" onChange={this.handleChange} value={this.state.book.pagesRead} placeholder="25"/>
                </FormGroup>
                <FormGroup>
                  <Label for="pagesTotal">Pages Total</Label>
                  <Input name="pagesTotal" id="pagesTotal" onChange={this.handleChange} value={this.state.book.pagesTotal} placeholder="460"/>
                </FormGroup>
                <FormGroup>
                  <Label for="bookList">Book List</Label>
                  <Input type="select" name="currentList" id="currentList" value={this.state.book.currentList} onChange={this.changeValue}>
                    <option value="reading" >Reading</option>
                    <option value="toRead">To Read</option>
                    <option value="haveRead">Have Read</option>
                  </Input>
                </FormGroup>
                <Button style={{backgroundColor:"#60be86"}}>Edit Book</Button>
              </Form>
              <Button onClick={this.onDelete} color="danger">Delete Book</Button>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }

}

export default EditBook;
