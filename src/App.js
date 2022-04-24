import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Preloader from './common/preloader/Preloader';
import Footer from './components/footer/footer';
import HeaderContainer from './components/header/headerContainer';
import Main from './components/main/Main';
import { initializeApp } from './redux/app-reducer';
import { loadingToggle } from './redux/config-reducer';

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

  if (!props.initialized || props.isLoading) {
    return <Preloader />
  }

  return (
    <div className='app'>
      <HeaderContainer />
      <Main />
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
    isLoading: state.config.isLoading,
  }
}

export default connect(mapStateToProps, {initializeApp, loadingToggle})(App);