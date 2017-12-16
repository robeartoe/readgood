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

class Header extends React.Component{
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render(){
    return(
      <div style={divStyle}>
        <Navbar light expand="sm">
          <NavbarBrand href="/" style={navBrandStyle}>ReadGood</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem><NavLink href='https://www.google.com'> Test</NavLink></NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
