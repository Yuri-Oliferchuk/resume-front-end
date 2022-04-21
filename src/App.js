import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Preloader from './common/preloader/Preloader';
import Footer from './components/footer/footer';
import HeaderContainer from './components/header/headerContainer';
import InfoContainer from './components/info/InfoContainer';
import { initializeApp } from './redux/app-reducer';

// class App extends React.Component {

//   componentDidMount = () => { this.props.initializeApp(); }

//   render() {
//     if (!this.props.initialized) {
//       return <Preloader />
//     }
  
//     return (
//       <div className='main'>
//         <HeaderContainer />
//         <InfoContainer />
//         <Footer />
//       </div>
//     );
//   }
// }

const App = (props) => {

  useEffect(() => {
    if (!props.initialized) {
      props.initializeApp();
    }
  })

  if (!props.initialized) {
    return <Preloader />
  }

  return (
    <div className='main'>
      <HeaderContainer />
      <InfoContainer />
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  }
}

export default connect(mapStateToProps, {initializeApp})(App);
