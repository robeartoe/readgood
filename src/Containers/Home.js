import React from 'react';
import Header from './Header'
import Footer from './Footer'

const style={backgroundColor:'whitesmoke'}


class Home extends React.Component{

  render() {
    return(
      <div style={style}>
        <Header />
        <h1>Hello</h1>
        <p>Test Test</p>
        <Footer />
      </div>
    )
  }
}
export default Home;
