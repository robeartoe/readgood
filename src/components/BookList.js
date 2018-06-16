// TODO: Determine how I would delete books from list.
// This will contain the table to display the books in their respective list(have read, currently reading, to read)

import React from 'react';
import {Table} from 'reactstrap';
import BookListing from './BookListing';

const style = {};

class BookList extends React.Component{
  constructor(props) {
       super(props);
   }
  render(){
    // console.log(this.props);
    const listItems = this.props.books.map((item,index) =>
    <BookListing book={item} numIndex={index}/>
    );
    return(
      <div>
        <Table bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>Title:</th>
              <th>Author:</th>
              <th>Pages Read:</th>
              <th>Pages Total:</th>
              <th>Edit: </th>
            </tr>
          </thead>
          <tbody>
            {listItems}
          </tbody>
        </Table>
      </div>
    )
  }
}
export default BookList;
