import { reduxForm } from "redux-form"
import { createField, Input } from "../../../assets/formsControls/FormsControls"
import { maxLengthCreator, requiredField } from "../validators"
import style from './LoginReduxForm.module.css'

const loginLength20 = maxLengthCreator(20);

const LoginForm = (props) => {
    return (
        <form className={style.loginForm} onSubmit={ props.handleSubmit }>
            <h1>Login</h1>
                {createField( "username", "Username", Input, [requiredField, loginLength20] )}
                {createField( "password", "Password", Input, [requiredField, loginLength20], {type: "password"} )}
            {/* <div>
                <label>Remember me:</label>
                {createField( "rememberMe", "", Input, [], {type: "checkbox", className: style.checkBoxContainer} )}
            </div> */}
            {props.error &&
                <div className={style.globalError}>
                    <div className={style.globalErrorMessage}>{props.error}</div>
                    <button>Login</button>
                </div>
            } 
            {!props.error &&
            <div>
                <button>Login</button>
            </div>}
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

export default LoginReduxForm;
