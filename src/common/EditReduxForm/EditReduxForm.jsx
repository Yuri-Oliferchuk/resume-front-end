import { reduxForm } from "redux-form"
import { Textarea, Input, createField } from "../../assets/formsControls/EditFormsControls";
import { maxLengthCreator, requiredField } from "../reduxForms/validators";
import style from './EditReduxForm.module.css'

const NameFieldLength = maxLengthCreator(50);
const ProfessionFieldLength = maxLengthCreator(100);

const EditForm = (props) => {
    return (
        <form className={style.editForm} onSubmit={ props.handleSubmit }>
                {createField( "name", "Name", Input, [requiredField, NameFieldLength], {labletext: "My Name:"} )}
                {createField( "profession", "Prfession", Input, [requiredField, ProfessionFieldLength], {labletext: "My Profession:"} )}
                {createField( "text", "Text", Textarea, [requiredField], {rows: 25, labletext: "General info:"} )}
                {createField( "contacts", "Contacts", Textarea, [requiredField], {rows: 10, labletext: "Contacts:"} )}
            {props.error &&
                <div className={style.globalError}>
                    <div className={style.globalErrorMessage}>{props.error}</div>
                    <button>Save</button>
                </div>
            } 
            {!props.error &&
            <div>
                <button>Save</button>
            </div>}
        </form>
    )
}

const EditReduxForm = reduxForm({ form: 'edit' })(EditForm)

export default EditReduxForm;
