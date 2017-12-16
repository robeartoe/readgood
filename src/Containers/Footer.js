import React from 'react'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

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
            <NavItem style={{color:'whitesmoke'}}>Created By: Robert Ruiz 2018</NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem><a></a></NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default Footer
