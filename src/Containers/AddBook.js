//This Container allows the user to add a book to any of their list.
import React from 'react';
import Layout from './Layout'
import {Link} from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/fontawesome-free-solid'
import {Container,Row,Col,Button,Form,FormGroup,Label,Input} from 'reactstrap'

const style={
  paddingBottom:"50px",
}

class AddBook extends React.Component{
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
              <span><Link to="/userpage"><FontAwesomeIcon style={{color:"#60be86"}} icon={faArrowLeft} size="2x"/></Link></span>
            </Col>
            <Col>
              <Form>
                <FormGroup>
                  <Label for="bookTitle">Title</Label>
                  <Input name="bookTitle" id="bookTitle" placeholder="Invisible Man"/>
                </FormGroup>
                <FormGroup>
                  <Label for="bookAuthor">Author</Label>
                  <Input name="bookAuthor" id="bookAuthor" placeholder="Ralph Ellison"/>
                </FormGroup>
                <FormGroup>
                  <Label for="pagesRead">Pages Read</Label>
                  <Input name="pagesRead" id="pagesRead" placeholder="25"/>
                </FormGroup>
                <FormGroup>
                  <Label for="pagesTotal">Pages Total</Label>
                  <Input name="pagesTotal" id="pagesTotal" placeholder="460"/>
                </FormGroup>
                <FormGroup>
                  <Label for="bookList">Book List</Label>
                  <Input type="select" name="bookList" id="bookList">
                    <option>Reading</option>
                    <option>To Read</option>
                    <option>Have Read</option>
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
