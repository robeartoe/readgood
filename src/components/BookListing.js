// This component will return a specific row located in BookListing.
import React from 'react'
import {Table} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faPencilAlt} from '@fortawesome/fontawesome-free-solid'
import {Link} from 'react-router-dom';

const style = {
  cursor:"pointer"
}

class BookListing extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <tr>
       <th scope="row">{this.props.numIndex+1}</th>
       <td>{this.props.book.title}</td>
       <td>{this.props.book.author}</td>
       <td>{this.props.book.pagesRead}</td>
       <td>{this.props.book.pagesTotal} </td>
       <td><Link to={{ pathname: "/EditBook", state: {book: this.props.book} }} style={style} ><FontAwesomeIcon style={{color:'#60be86'}} icon={faPencilAlt}  size='lg'/></Link></td>
      </tr>
    )
  }
}

export default BookListing
