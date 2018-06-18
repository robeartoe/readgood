// This will display info about the user, and their stats about their list, their books, pages read, pages to read, etc.
import React from 'react'

const BookStats = {textAlign:'right',float:'right'}

class Stats extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      stats:{
        booksTotal:0, booksRead:0,
        booksToRead:0, booksHaveRead:0,
        pagesRead:0, pagesTotal:0
      }
    };
  }

  componentDidMount(){
    var data = {
      booksTotal:0,
      booksRead:0,
      booksToRead : 0,
      booksHaveRead : 0,
      pagesRead : 0,
      pagesTotal : 0
    };

    if(this.props.booklist.haveRead !== undefined){
      data.booksHaveRead  += this.props.booklist.haveRead.length;
      data.booksTotal += this.props.booklist.haveRead.length;
      for(var i in this.props.booklist.haveRead){
        data.pagesRead += this.props.booklist.haveRead[i].pagesRead;
        data.pagesTotal += this.props.booklist.haveRead[i].pagesTotal;
      }
    }

    if(this.props.booklist.reading !== undefined){
      data.booksRead += this.props.booklist.reading.length;
      data.booksTotal += this.props.booklist.reading.length;
      for(var i in this.props.booklist.reading){
        data.pagesRead += this.props.booklist.reading[i].pagesRead;
        data.pagesTotal += this.props.booklist.reading[i].pagesTotal;
      }
    }

    if(this.props.booklist.toRead !== undefined){
      data.booksToRead += this.props.booklist.toRead.length;
      data.booksTotal += this.props.booklist.toRead.length;
      for(var i in this.props.booklist.toRead){
        data.pagesRead += this.props.booklist.toRead[i].pagesRead;
        data.pagesTotal += this.props.booklist.toRead[i].pagesTotal;
      }
    }

    this.setState({stats:data});
  }

  render(){
    return(
      <div>
        <h4 style={{textAlign:'center'}}>
          Stats:
        </h4>
        <h4>
          Books Total: <span style={BookStats}>{this.state.stats.booksTotal}</span>
        </h4>
        <h4>
          Books Read: <span style={BookStats}>{this.state.stats.booksHaveRead}</span>
        </h4>
        <h4>
          Books Reading: <span style={BookStats}>{this.state.stats.booksRead}</span>
        </h4>
        <h4>
          Books to Read: <span style={BookStats}>{this.state.stats.booksToRead} </span>
        </h4>
        <h4>
          Pages Read: <span style={BookStats}>{this.state.stats.pagesRead} </span>
        </h4>
        <h4>
          Pages Total: <span style={BookStats}>{this.state.stats.pagesTotal}</span>
        </h4>
      </div>
    )
  }
}
export default Stats;
