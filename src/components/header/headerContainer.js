import { connect } from 'react-redux';
import { logout, checkAuthorization } from '../../redux/auth-reducer';
import { projectLanguageChanging } from '../../redux/config-reducer';
import { getUserData } from '../../redux/info-reducer';
import Header from './header';

function HeaderContainer(props) {

    return (
        <Header lang={props.lang}
                projectLanguageChanging={props.projectLanguageChanging}
                getUserData={props.getUserData}
                isAuth={props.isAuth}
                logout={props.logout}
                checkAuthorization={props.checkAuthorization}
                token={props.token} />
    );
}

const mapStateToProps = (state) => {
    return {
        lang: state.config.lang,
        isAuth: state.auth.isAuth,
        token: state.auth.token
    }
}

export default connect(mapStateToProps, {projectLanguageChanging, getUserData, logout, checkAuthorization})(HeaderContainer);