import { NavLink } from 'react-router-dom';
import style from './header.module.css';

function Header(props) {
    const onLanguageChange = () => {
        const newLang = (props.lang === "ENG") ? "UA" : "ENG";
        props.projectLanguageChanging(newLang)
        props.getUserData(newLang.toLowerCase())
    }

    return (
        <div className={style.header}>
            <div className={style.langMenu}>
                <button onClick={onLanguageChange}>{props.lang}</button>
            </div>
            <div className={style.mainMenu}>
                <NavLink to='/login'>Login</NavLink>
            </div>
        </div>
    );
}

export default Header;