import React from 'react';
import Header from './Header'
import Footer from './Footer'

const style={
  backgroundColor:'whitesmoke',
  height:'100vh',
  minHeight:'100vh',
  // overflow: 'hidden',
  // display: 'block',
  position: 'relative'
}

class Layout extends React.Component{
  render() {
    return(
      <div>
        <Header />
          <div style={style}>
            {this.props.children}
          </div>
        <Footer />
      </div>
    )
  }
}

export default Layout;
