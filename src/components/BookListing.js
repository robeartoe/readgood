// This component will return a specific row located in BookListing.
import React from 'react'
import {Table} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faPencilAlt} from '@fortawesome/fontawesome-free-solid'

class BookListing extends React.Component{
  constructor(props) {
       super(props);
   }

   // componentDidMount(){
   //   console.log(this.state)
   // }

  render(){
    // console.log(this.props);
    return(
      <tr>
       <th scope="row">{this.props.numIndex+1}</th>
       <td>{this.props.book.title}</td>
       <td>{this.props.book.author}</td>
       <td>{this.props.book.pagesRead}</td>
       <td>{this.props.book.pagesTotal} </td>
       <td> <FontAwesomeIcon style={{color:'#60be86'}} icon={faPencilAlt}  size='lg'/> </td>
      </tr>
    )
  }
}

export default BookListing
