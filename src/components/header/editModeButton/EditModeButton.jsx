const EditModeButton = (props) => {

    const onEditMode = () => {
        props.editModeToggle(true);
        props.router.navigate('/edit');
    }

    const offEditMode = () => {
        props.editModeToggle(false);
        props.router.navigate('/');
    }

    if (props.isAuth && !props.isEditMode) {
        return <button onClick={onEditMode}>Edit mode</button>
    }

    if (props.isAuth && props.isEditMode) {
        return <button onClick={offEditMode}>Back Home</button>
    }
}

export default EditModeButton;