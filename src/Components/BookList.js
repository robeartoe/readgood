// TODO: Determine how I would delete books from list.
// This will contain the table to display the books in their respective list(have read, currently reading, to read)

import React from 'react';
import {Table} from 'reactstrap';
import BookListing from './BookListing';

const style = {};

class BookList extends React.Component{
  render(){
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
            </tr>
          </thead>
          <tbody>
            <BookListing/>
            <BookListing/>
            <BookListing/>
            <BookListing/>
            <BookListing/>
            <BookListing/>
            <BookListing/>
          </tbody>
        </Table>
      </div>
    )
  }
}
export default BookList;
