import React from 'react'

import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faGithub,faLinkedin} from '@fortawesome/fontawesome-free-brands'

const divStyle = {
  backgroundColor:"#60be86"
}

const navBrandStyle = {
  color:'whitesmoke',
}

class Footer extends React.Component{
  render(){
    return(
      <div style={divStyle}>
        <Navbar light expand="md">
          <Nav className="mr-auto" navbar>
            <NavItem style={navBrandStyle}>Created By: Robert Ruiz; 2018</NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem><NavLink href='https://github.com/robeartoe'><FontAwesomeIcon style={navBrandStyle} icon={faGithub} size='lg' /></NavLink>
            </NavItem>
            <NavItem><NavLink href='https://www.linkedin.com/in/robert-ruiz-993153a1/'><FontAwesomeIcon style={navBrandStyle} icon={faLinkedin} size='lg' /></NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default Footer
