import { reduxForm } from "redux-form"
import { Textarea, Input, createField } from "../../assets/formsControls/EditFormsControls";
import { maxLengthCreator, requiredField } from "../reduxForms/validators";
import style from './EditReduxForm.module.css'

const NameFieldLength = maxLengthCreator(50);
const ProfessionFieldLength = maxLengthCreator(100);

const EditForm = (props) => {
    const isDisabled = !props.superuser;

    return (
        <form className={style.editForm} onSubmit={ props.handleSubmit }>
            {isDisabled &&
                <div className={style.notAdmin}>You are not admin!!!</div>
            }
                {createField( "name", "Name", Input, [requiredField, NameFieldLength], 
                    {labletext: "My Name:", disabled: isDisabled } )}
                {createField( "profession", "Prfession", Input, [requiredField, ProfessionFieldLength], 
                    {labletext: "My Profession:", disabled: isDisabled } )}
                {createField( "text", "Text", Textarea, [requiredField], 
                    {rows: 25, labletext: "General info:", disabled: isDisabled } )}
                {createField( "contacts", "Contacts", Textarea, [requiredField], 
                    {rows: 10, labletext: "Contacts:", disabled: isDisabled } )}
            {props.error &&
                <div className={style.globalError}>
                    <div className={style.globalErrorMessage}>{props.error}</div>
                    <button>Save</button>
                </div>
            } 
            {!props.error &&
            <div>
                {!isDisabled && <button>Save</button>}
            </div>}
        </form>
    )
}

const EditReduxForm = reduxForm({ form: 'edit' })(EditForm)

export default EditReduxForm;
