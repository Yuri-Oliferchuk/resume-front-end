import { useEffect } from 'react';
import { connect } from 'react-redux';
import { editModeToggle } from '../../redux/config-reducer';
import Info from './Info';

function InfoContainer(props) {
    const {editModeToggle} = props;
    
    useEffect (() => {
        editModeToggle(false)
    }, [editModeToggle])

    return (
        <Info user={props.user} />
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.info.user,
    }
}

export default connect(mapStateToProps, { editModeToggle })(InfoContainer);