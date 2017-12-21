import React from 'react';
import Stats from '../Components/Stats';
import BookList from '../Components/BookList';
import Layout from './Layout'
import {Container,Row,Col,TabContent, TabPane, Nav, NavItem, NavLink,} from 'reactstrap';
import classnames from 'classnames';

const UserStats = {}
const BookStats = {}
const style={}

class UserPage extends React.Component{
  constructor(props) {
   super(props);

   this.toggle = this.toggle.bind(this);
   this.state = {
     activeTab: '1'
   };
 }

 toggle(tab) {
   if (this.state.activeTab !== tab) {
     this.setState({
       activeTab: tab
     });
   }
 }

  render(){
    return(
      <Layout>
        <div>
          <Container>
            <Row>
              <Col xs="3" style={UserStats}>
                <Stats/>
              </Col>
              <Col style={BookStats}>
                <Nav tabs>
                  <NavItem>
                    <NavLink className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggle('1'); }}>Currently Reading</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggle('2'); }}>Plan to read</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className={classnames({ active: this.state.activeTab === '3' })} onClick={() => { this.toggle('3'); }}>Have Read</NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                      <Row>
                        <Col sm="12">
                          <BookList/>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                          <Col sm="12">
                            <BookList/>
                          </Col>
                        </Row>
                      </TabPane>
                      <TabPane tabId="3">
                          <Row>
                            <Col sm="12">
                              <BookList/>
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
