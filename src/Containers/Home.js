import React from 'react';
import Header from './Header'
import Footer from './Footer'

const style={
  backgroundColor:'whitesmoke',
  height:'100vh',
  minHeight:'100vh'}


class Home extends React.Component{

  render() {
    return(
      <div style={style}>
        <Header />
        <Footer />
      </div>
    )
  }
}
export default Home;
