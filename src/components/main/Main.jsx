import { Route, Routes } from 'react-router-dom';
import InfoContainer from '../info/InfoContainer';
import Login from '../login/Login';
import style from './Main.module.css';

function Main(props) {
  return (
    <div className={style.main}>
      <Routes>
        <Route path='/' element={<InfoContainer />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}
export default Main;