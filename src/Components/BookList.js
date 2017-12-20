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
              <th size="2">Title:</th>
              <th size="2">Author:</th>
              <th size="2">Pages Read:</th>
              <th size="2">Pages Total:</th>
            </tr>
          </thead>
          <tbody>
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
