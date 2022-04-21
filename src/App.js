import './App.css';
import Footer from './components/footer/footer';
import HeaderContainer from './components/header/headerContainer';
import InfoContainer from './components/info/InfoContainer';

function App() {
  return (
    <div className='main'>
      <HeaderContainer />
      <InfoContainer />
      <Footer />
    </div>
  );
}

export default App;
