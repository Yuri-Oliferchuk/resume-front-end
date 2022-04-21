import { connect } from 'react-redux';
import { projectLanguageChanging } from '../../redux/config-reducer';
import { getUserData } from '../../redux/info-reducer';
import Header from './header';

function HeaderContainer(props) {

    return (
        <Header lang={props.lang}
                projectLanguageChanging={props.projectLanguageChanging}
                getUserData={props.getUserData} />
    );
}

const mapStateToProps = (state) => {
    return {
        lang: state.config.lang,
    }
}

export default connect(mapStateToProps, {projectLanguageChanging, getUserData})(HeaderContainer);