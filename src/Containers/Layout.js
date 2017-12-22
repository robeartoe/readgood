import React from 'react';
import Header from './Header'
import Footer from '../Components/Footer'

const style={
  backgroundColor:'whitesmoke',
  // height:'100vh',
  // minHeight:'100vh'
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
