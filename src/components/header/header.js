import { NavLink } from 'react-router-dom';
import style from './header.module.css';

function Header(props) {
    const onLanguageChange = () => {
        const newLang = (props.lang === "ENG") ? "UA" : "ENG";
        props.projectLanguageChanging(newLang);
        props.getUserData(newLang.toLowerCase());
    }

    const onLogout = () => {
        props.logout();
    }
    
    const onCheck = () => {
        props.checkAuthorization(props.token);
    }

    return (
        <div className={style.header}>
            <div className={style.langMenu}>
                <button onClick={onLanguageChange}>{props.lang}</button>
            </div>
            <div className={style.mainMenu}>
                { !props.isAuth &&
                <NavLink to='/login'>Login</NavLink>
                }
                { props.isAuth && <>
                <button onClick={onLogout}>Logout</button>
                <button onClick={onCheck}>Check</button>
                </>}
            </div>
        </div>
    );
}

export default Header;