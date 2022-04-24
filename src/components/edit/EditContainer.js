import { useEffect } from "react"
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"
import { compose } from "redux"
import { editModeToggle } from "../../redux/config-reducer"
import Edit from "./Edit"

const EditContainer = (props) => {
    const {editModeToggle} = props;
    
    useEffect (() => {
        editModeToggle(true)
    }, [editModeToggle])

    if (!props.isAuth) {
        return <Navigate to="/" />
    }

    return (
        <Edit />
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export default compose(
    connect(mapStateToProps, { editModeToggle })
)(EditContainer)