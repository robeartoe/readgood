import React from 'react';
import Header from './Header'
import Footer from '../Components/Footer'

const style={
  backgroundColor:'whitesmoke'
  // height:'100vh',
  // minHeight:'100vh'
  // minHeight: '100vh', /* will cover the 100% of viewport */
  // overflow: 'hidden',
  // display: 'block',
  // position: 'relative',
  // paddingBottom: '100px' /* height of your footer */
}

class Layout extends React.Component{

  render() {
    return(
      <div style={style}>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default Layout;
