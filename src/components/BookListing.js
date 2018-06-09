// This component will return a specific row located in BookListing.
import React from 'react'
import {Table} from 'reactstrap';

class BookListing extends React.Component{
  render(){
    return(
      <tr>
       <td>1</td>
       <td>A Dogs Journey</td>
       <td>W. Bruce Cameron</td>
       <td>97</td>
       <td>200</td>
      </tr>
    )
  }
}

export default BookListing
