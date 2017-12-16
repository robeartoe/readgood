import React from 'react'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavDropdown,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  DropdownButton} from 'reactstrap';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faBars,faCog,faUser,faSignout} from '@fortawesome/fontawesome-free-solid'

const divStyle = {
  backgroundColor:"#60be86"
}

const navBrandStyle = {
  color:'whitesmoke',
  fontSize:'24px',
}

class Header extends React.Component{
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.state = {
      isOpen: false,
      isHover: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleMouseOver(){
    this.setState({isHover:true})
  }
  handleMouseOut(){
    this.setState({isHover:false})
  }
  handleOnClick(){

  }

  // {{!this.state.isHover && <FontAwesomeIcon onMouseOver={this.handleMouseOver} onMouseOut={this.onMouseOut} style={{color:'whitesmoke'}} icon={faCog} size='lg'/>}
  // { this.state.isHover && <FontAwesomeIcon onMouseOver={this.handleMouseOver}

  render(){
    return(
      <div style={divStyle}>
        <Navbar light expand="sm">
          <NavbarBrand href="/" style={navBrandStyle}>ReadGood</NavbarBrand>
          <Nav className="ml-auto" navbar >
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                    <span>
                      <FontAwesomeIcon onMouseOver={this.handleMouseOver} onMouseOut={this.onMouseOut} style={{color:'whitesmoke'}} icon={faCog} size='lg'/>
                    </span>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem eventKey='1'>User Profile</DropdownItem>
                <DropdownItem eventKey='2'>Settings</DropdownItem>
                <DropdownItem divider />
                <DropdownItem eventKey='3'><NavLink href='https://www.google.com'>Logout</NavLink></DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
