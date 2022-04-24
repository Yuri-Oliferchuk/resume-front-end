import EditModeButton from './editModeButton/EditModeButton';
import style from './header.module.css';

function Header(props) {
    const onLanguageChange = () => {
        const newLang = (props.lang === "ENG") ? "UA" : "ENG";
        props.projectLanguageChanging(newLang);
        props.getUserData(newLang.toLowerCase());
    }

    const onLogout = () => {
        props.logout();
        props.router.navigate('/');
    } 
    
    return (
        <div className={style.header}>
            <div className={style.langMenu}>
                <button onClick={onLanguageChange}>{props.lang}</button>
            </div>
            <div className={style.edit} >
                <EditModeButton isEditMode={props.isEditMode}
                                router={props.router}
                                editModeToggle={props.editModeToggle}
                                isAuth={props.isAuth} />
            </div>
            <div className={style.mainMenu}>
                { !props.isAuth && <>
                <button onClick={() => {props.router.navigate('/login')}}>Log in</button>
                <button onClick={() => {props.router.navigate('/signup')}}>Sign up</button>
                </>}
                { props.isAuth && <>
                <div className={style.userName}>{props.userName}</div>
                <button onClick={onLogout}>Logout</button>
                </>}
            </div>
        </div>
    );
}

export default Header;