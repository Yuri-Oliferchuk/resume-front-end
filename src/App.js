import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Info from './components/info/Info';

function App() {
  return (
    <div className='main'>
      <Header className='header' />
      <Info className='info' />
      <Footer className='footer' />
    </div>
  );
}

export default App;
