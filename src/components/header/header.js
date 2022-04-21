import { NavLink } from 'react-router-dom';
import './header.css';

function Header(props) {

    return (
        <div className={props.className}>
            <div className='langMenu'>
                <NavLink to='/eng' >ENG</NavLink>
                /
                <NavLink to='/ua'>UA</NavLink>
            </div>
            <div className='mainMenu'>
                <NavLink to='/login'>Login</NavLink>
            </div>
        </div>
    );
}

export default Header;