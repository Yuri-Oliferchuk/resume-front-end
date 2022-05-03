import EditReduxForm from "../../common/EditReduxForm/EditReduxForm";

const Edit = (props) => {

    const onSubmit = (formData) => {
        // props.postUserData({ ...formData, lang: props.lang.toLowerCase(), token: props.token })
        props.postUserData({ ...formData, lang: props.lang.toLowerCase()})
    }

    return (
        <EditReduxForm initialValues={props.user}
                       onSubmit={onSubmit}
                       superuser={props.superuser} />
    )
}

export default Edit;