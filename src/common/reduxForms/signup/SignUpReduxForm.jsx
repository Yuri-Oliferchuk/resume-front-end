import { reduxForm } from "redux-form"
import { createField, Input } from "../../../assets/formsControls/FormsControls"
import { isEmail, maxLengthCreator, requiredField } from "../validators"
import style from './SignUpReduxForm.module.css'

const signupLength20 = maxLengthCreator(20);

const SignUpForm = (props) => {
    return (
        <form className={style.loginForm} onSubmit={ props.handleSubmit }>
            <h1>Login</h1>
                {createField( "username", "Username", Input, [requiredField, signupLength20] )}
                {createField( "email", "Email", Input, [requiredField, isEmail] )}
                {createField( "password", "Password", Input, [requiredField, signupLength20], {type: "password"} )}
            {/* <div>
                <label>Remember me:</label>
                {createField( "rememberMe", "", Input, [], {type: "checkbox", className: style.checkBoxContainer} )}
            </div> */}
            {props.error &&
                <div className={style.globalError}>
                    <div className={style.globalErrorMessage}>{props.error}</div>
                    <button>Sign Up</button>
                </div>
            } 
            {!props.error &&
            <div>
                <button>Sign Up</button>
            </div>}
        </form>
    )
}

const SignUpReduxForm = reduxForm({ form: 'signup' })(SignUpForm)

export default SignUpReduxForm;
