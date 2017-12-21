// This will display info about the user, and their stats about their list, their books, pages read, pages to read, etc.
import React from 'react'
import {Row,Col,Container,Button} from 'reactstrap'

const UserStats = {}
const BookStats = {textAlign:'right',float:'right'}
const style={}


class Stats extends React.Component{
  render(){
    return(
      <div>
        <h1 style={{textAlign:'center'}}>
          Robert Ruiz
        </h1>
        <Button color="secondary" size="lg" style={{backgroundColor:"#60be86"}} block>Add Book</Button>
        <hr>
        </hr>
        <h4 style={{textAlign:'center'}}>
          Stats:
        </h4>
        <h4>
          Books Total: <span style={BookStats}>34</span>
        </h4>
        <h4>
          Books Read: <span style={BookStats}>34</span>
        </h4>
        <h4>
          Books Reading: <span style={BookStats}>34</span>
        </h4>
        <h4>
          Books to Read: <span style={BookStats}>34</span>
        </h4>
        <h4>
          Pages Read: <span style={BookStats}>344</span>
        </h4>
        <h4>
          Pages Total: <span style={BookStats}>125604</span>
        </h4>
      </div>
    )
  }
}
export default Stats;
