import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import LoginReduxForm from "../../common/reduxForms/login/LoginReduxForm";
import { login } from "../../redux/auth-reducer";

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData)
    }

    if (props.isAuth) {
        return <Navigate to="/" />
    }

    return (
        <div>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, { login,  })(Login);