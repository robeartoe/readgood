import React from 'react'
import {Row,Col,Container,Button} from 'reactstrap'
import {Link} from 'react-router-dom';

const UserStats = {}
const BookStats = {textAlign:'right',float:'right'}
const style={}

class SideBar extends React.Component{
  render(){
    return(
      <div>
        <h1 style={{textAlign:'center'}}>
          Robert Ruiz
        </h1>
        <Link to="/Addbook"><Button color="secondary" size="lg" style={{backgroundColor:"#60be86"}} block>Add Book</Button></Link>
        <hr>
        </hr>
        {this.props.children}
      </div>
    )
  }
}
export default SideBar;
