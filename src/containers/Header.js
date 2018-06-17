// TODO: Set the right part of the header(Gear) to be visible if user is logged in, and not visible is user is logged out.

import React,{PropTypes} from 'react'
import { withRouter } from 'react-router-dom'

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
import {faBars,faCog,faUser,faSignInAlt} from '@fortawesome/fontawesome-free-solid'

const divStyle = {
  backgroundColor:"#60be86",
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
    this.LogOut = this.LogOut.bind(this);
    this.state = {
      isOpen: false,
      isHover: false
    };
  }
  // static contextTypes = {
  //   router: PropTypes.object
  // }
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

  LogOut(){
    localStorage.removeItem('jwtToken');
    this.props.history.push('/');
    window.location.reload();
  }

  render(){
    return(
      <div style={divStyle}>
        <Navbar light expand="sm">
          <NavbarBrand href="/" style={navBrandStyle}>ReadGood</NavbarBrand>
          <Nav className="ml-auto" navbar >
            <UncontrolledDropdown nav innavbar>
              <DropdownToggle nav caret>
                    <span>
                      <FontAwesomeIcon onMouseOver={this.handleMouseOver} onMouseOut={this.onMouseOut} style={{color:'whitesmoke'}} icon={faCog} size='lg'/>
                    </span>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem eventkey='1' href="/"><FontAwesomeIcon style={{color:'#60be86'}} icon={faUser} size='sm'/> User Profile</DropdownItem>
                <DropdownItem href="/settings" eventkey='2'><FontAwesomeIcon style={{color:'#60be86'}} icon={faCog} size='sm'/> Settings</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={this.LogOut} eventkey='3'><FontAwesomeIcon style={{color:'#60be86'}} icon={faSignInAlt}  size='sm'/> Logout</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(Header);
