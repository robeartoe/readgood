// This will display info about the user, and their stats about their list, their books, pages read, pages to read, etc.
import React from 'react'
import {Row,Col,Container,Button} from 'reactstrap'
import {Link} from 'react-router-dom';

const UserStats = {}
const BookStats = {textAlign:'right',float:'right'}
const style={}


class Stats extends React.Component{
  constructor(props){
    super(props);
    this.state = {booksTotal:0,booksRead:0,booksToRead:0,booksRead:0,pagesRead:0,pagesTotal:0};
  }

  componentDidMount(){

  }

  determineStats(){
  }

  render(){
    console.log(this.props)
    return(
      <div>
        <h4 style={{textAlign:'center'}}>
          Stats:
        </h4>
        <h4>
          Books Total: <span style={BookStats}> </span>
        </h4>
        <h4>
          Books Read: <span style={BookStats}> </span>
        </h4>
        <h4>
          Books Reading: <span style={BookStats}> </span>
        </h4>
        <h4>
          Books to Read: <span style={BookStats}> </span>
        </h4>
        <h4>
          Pages Read: <span style={BookStats}> </span>
        </h4>
        <h4>
          Pages Total: <span style={BookStats}> </span>
        </h4>
      </div>
    )
  }
}
export default Stats;
