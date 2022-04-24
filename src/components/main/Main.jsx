import { Route, Routes } from 'react-router-dom';
import EditContainer from '../edit/EditContainer';
import InfoContainer from '../info/InfoContainer';
import Login from '../login/Login';
import Signup from '../signup/Signup';
import style from './Main.module.css';

function Main(props) {
  return (
    <div className={style.main}>
      <Routes>
        <Route path='/' element={<InfoContainer />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/edit' element={<EditContainer />} />
      </Routes>
    </div>
  );
}
export default Main;