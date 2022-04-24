import { connect } from 'react-redux';
import Info from './Info';

function InfoContainer(props) {
    return (
        <Info user={props.user} />
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.info.user,
    }
}

export default connect(mapStateToProps, {  })(InfoContainer);