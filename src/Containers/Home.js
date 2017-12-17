import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Login from './Login'

const style={
  backgroundColor:'whitesmoke',
  // height:'100vh',
  // minHeight:'100vh'
}


class Home extends React.Component{

  render() {
    return(
      <div style={style}>
        <Header />
        <Login />
        <Footer />
      </div>
    )
  }
}
export default Home;
