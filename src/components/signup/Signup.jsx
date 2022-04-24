import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import SignUpReduxForm from "../../common/reduxForms/signup/SignUpReduxForm";
import { signup } from "../../redux/auth-reducer";

const Signup = (props) => {

    const onSubmit = (formData) => {
        props.signup(formData)
    }

    if (props.isAuth) {
        return <Navigate to="/" />
    }

    return (
        <div>
            <SignUpReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { signup })(Signup);