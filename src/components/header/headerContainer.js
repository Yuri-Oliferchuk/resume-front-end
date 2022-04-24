import { connect } from 'react-redux';
import { compose } from 'redux';
import withRouter from '../../common/withRouter/withRouter';
import { logout } from '../../redux/auth-reducer';
import { editModeToggle, projectLanguageChanging } from '../../redux/config-reducer';
import { getUserData } from '../../redux/info-reducer';
import Header from './header';

function HeaderContainer(props) {

    return (
        <Header { ...props } />
    );
}

const mapStateToProps = (state) => {
    return {
        lang: state.config.lang,
        isAuth: state.auth.isAuth,
        isEditMode: state.config.isEditMode,
        userName: state.auth.user.username,
    }
}

export default compose(
    withRouter,                              // for old React wersion, when router no work
    connect(mapStateToProps, { projectLanguageChanging, getUserData, logout, editModeToggle })
  )(HeaderContainer);