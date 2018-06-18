import React from 'react';
import Stats from '../components/Stats';
import BookList from '../components/BookList';
import SideBar from '../components/Sidebar';
import Layout from './Layout'
import {Container,Row,Col,TabContent, TabPane, Nav, NavItem, NavLink,Table} from 'reactstrap';
import classnames from 'classnames';
import bookService from '../api/bookService'
import axios from 'axios';

const UserStats = {}
const BookStats = {}
const style = {
  cursor:"pointer"
}

class UserPage extends React.Component{
  constructor(props) {
   super(props);
   this.toggle = this.toggle.bind(this);
   this.state = {
     activeTab: '1',
     user: []
   };
 }

 componentDidMount(){
   // console.log(localStorage.getItem('jwtToken'));
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    var self = this;
    axios.get('http://localhost:4200/api/') //This will get the user, their books, everything.
      .then((results)=>{
        // console.log(results.data);
        self.setState({user:results.data});
        // console.log(self.state.user)
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response)
        if(error.response.status === 401 || error.response.status === 403) {
            self.props.history.push("/login");
        }
      });
}

 toggle(tab) {
   if (this.state.activeTab !== tab) {
     this.setState({
       activeTab: tab
     });
   }
 }

  render(){
    // console.log(this.state)
    let readingComp,toReadComp,haveReadComp;
    let booklist = this.state.user.bookList;

    if(booklist !== undefined && booklist.reading !== undefined && booklist.reading.length !== 0){readingComp = <BookList books={booklist.reading} />}
    else{readingComp = null}

    if(booklist !== undefined && booklist.toRead !== undefined && booklist.toRead.length !== 0){toReadComp = <BookList books={booklist.toRead} />}
    else{toReadComp = null}

    if(booklist !== undefined && booklist.haveRead !== undefined && booklist.haveRead.length !== 0){haveReadComp = <BookList books={booklist.haveRead} />}
    else{haveReadComp = null}


    return(
      <Layout>
        <div>
          <Container>
            <Row>
              <Col xs="3" style={UserStats}>
                <SideBar>
                  {
                    ( booklist !== undefined &&
                      (( booklist.reading !== undefined && booklist.reading.length !== 0)
                      ||
                      ( booklist.toRead !== undefined && booklist.toRead.length !== 0)
                      ||
                      ( booklist.haveRead !== undefined && booklist.haveRead.length !== 0))
                    )
                    ?
                    <Stats booklist={booklist}/>
                    :
                    null
                  }
                </SideBar>
              </Col>
              <Col style={BookStats}>
                <Nav tabs>
                  <NavItem>
                    <NavLink style={style} className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggle('1');}} >Currently Reading</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink style={style} className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggle('2'); }}>Plan to read</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink style={style} className={classnames({ active: this.state.activeTab === '3' })} onClick={() => { this.toggle('3'); }}>Have Read</NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                    <Row>
                      <Col sm="12">
                        {readingComp}
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="2">
                    <Row>
                      <Col sm="12">
                        {toReadComp}
                      </Col>
                    </Row>
                    </TabPane>
                    <TabPane tabId="3">
                      <Row>
                        <Col sm="12">
                          {haveReadComp}
                        </Col>
                      </Row>
                    </TabPane>
                </TabContent>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    )
  }
}

export default UserPage;
